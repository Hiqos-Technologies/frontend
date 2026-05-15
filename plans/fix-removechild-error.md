# Fix Plan: `Node.removeChild` NotFoundError on Internal Navigation

## Root Cause

GSAP ScrollTrigger's `pin: true` feature wraps pinned elements in `<div class="pin-spacer">` wrappers, directly mutating the DOM that React manages. When you click an internal link:

1. Next.js starts navigating to the new page
2. React begins unmounting the current page's component tree
3. React expects certain DOM nodes to be direct children of specific parents
4. But GSAP has **inserted wrapper divs** between React's parent-child relationships
5. React calls `removeChild()` on a parent that no longer directly contains the expected child
6. → **`NotFoundError: The node to be removed is not a child of this node`**

### Affected Components

| Component | File | Issue |
|-----------|------|-------|
| ServiceSlides | `components/ServiceSlides.tsx:60` | `pin: true` on slideshow section |
| WhoWeAre | `components/WhoWeAre.tsx:154` | `pin: true` on scrollable grid section |
| Home page | `app/home/page.tsx:72-117` | GSAP ScrollTrigger animations on video/marquee |
| Footer | `components/Footer.tsx:35-63` | GSAP ScrollTrigger on footer children |
| About page | `app/about/page.tsx:34-127` | GSAP timeline + ScrollTrigger on partners |
| Organogram | `components/organogram.tsx:71-122` | GSAP ScrollTrigger on leader cards |
| Marquee | `components/Marquee.tsx:12-30` | GSAP infinite tween on track |

---

## Fix Strategy

The fix has **two layers**:

1. **Global route-change cleanup** — Kill all GSAP ScrollTriggers BEFORE React unmounts components
2. **Component-level hardening** — Ensure each component's GSAP context cleanup is robust

### Why Two Layers?

The `ctx.revert()` in `useEffect` cleanup runs **during** React's unmount phase — but by then React is already walking the DOM tree and calling `removeChild`. We need to revert GSAP's DOM mutations **before** React starts unmounting. The global cleanup achieves this by reacting to pathname changes.

---

## Change 1: Create `components/GsapCleaner.tsx` (NEW FILE)

This component wraps the app and kills all GSAP ScrollTrigger instances when the route changes, **before** React unmounts the old page's components.

```tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Kills all GSAP ScrollTrigger instances and reverts
 * DOM mutations (like pin-spacer wrappers) BEFORE React
 * starts unmounting components on route change.
 */
export default function GsapCleaner({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      // Kill ALL ScrollTrigger instances globally
      ScrollTrigger.getAll().forEach((t) => t.kill());
      // Clear scroll memory to prevent stale positions
      ScrollTrigger.clearScrollMemory();
    };
  }, [pathname]);

  return <>{children}</>;
}
```

### How it works

```
User clicks link → pathname changes → GsapCleaner's cleanup runs
  → ScrollTrigger.kill() removes all pin-spacer wrappers
  → DOM is restored to React's expected structure
  → React unmounts components normally (no error)
```

---

## Change 2: Update `app/layout.tsx`

Wrap `{children}` with the `GsapCleaner` component:

```tsx
// Add import
import GsapCleaner from "@/components/GsapCleaner";

// In the return, wrap children:
<SidebarProvider>
  <Navbar />
  <GsapCleaner>     {/* ← NEW wrapper */}
    {children}
  </GsapCleaner>    {/* ← NEW wrapper */}
  <Footer />
  <Sidebar />
</SidebarProvider>
```

> **Note:** `Footer` and `Sidebar` stay OUTSIDE the GsapCleaner since they also use GSAP and are persistent across routes. The GsapCleaner only wraps the page content that gets unmounted on navigation.

---

## Change 3: Harden `components/ServiceSlides.tsx`

The `pin: true` here is the **primary culprit**. Add explicit ScrollTrigger kill in cleanup:

```tsx
// Current (line 27-87):
useLayoutEffect(() => {
  const section = sectionRef.current;
  // ... setup code ...
  
  const ctx = gsap.context(() => {
    // ... animations ...
  }, sectionRef);

  return () => ctx.revert();
}, []);

// Change to:
useLayoutEffect(() => {
  const section = sectionRef.current;
  // ... setup code (unchanged) ...
  
  const ctx = gsap.context(() => {
    // ... animations (unchanged) ...
  }, sectionRef);

  return () => {
    // Explicitly kill ScrollTrigger instances first
    ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger === section || section?.contains(t.trigger as Node)) {
        t.kill();
      }
    });
    ctx.revert();
  };
}, []);
```

This ensures the pin-spacer wrapper is removed **synchronously** before React walks the DOM.

---

## Change 4: Harden `components/WhoWeAre.tsx`

Same pattern — the `pin: true` on line 150-156 needs explicit kill:

```tsx
// Current (line 132-176):
useEffect(() => {
  const ctx = gsap.context(() => {
    // ... ScrollTrigger.create with pin: true ...
    // ... gsap.fromTo with scrollTrigger ...
  });

  return () => ctx.revert();
}, []);

// Change to:
useEffect(() => {
  const ctx = gsap.context(() => {
    // ... unchanged ...
  });

  return () => {
    // Kill pinned ScrollTriggers explicitly before revert
    ScrollTrigger.getAll().forEach((t) => {
      if (
        sectionRef.current &&
        (t.trigger === sectionRef.current ||
          sectionRef.current.contains(t.trigger as Node))
      ) {
        t.kill();
      }
    });
    ctx.revert();
  };
}, []);
```

---

## Change 5: Harden `app/home/page.tsx`

Add `ScrollTrigger` import and explicit cleanup:

```tsx
// Add import at top (line 7):
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Already has: gsap.registerPlugin(ScrollTrigger); — but it's missing!
// Add after imports:
gsap.registerPlugin(ScrollTrigger);

// Update the GSAP useEffect cleanup (line 72-117):
useEffect(() => {
  const ctx = gsap.context(() => {
    // ... unchanged ...
  });

  return () => {
    ScrollTrigger.getAll().forEach((t) => {
      if (
        videoContainerRef.current?.contains(t.trigger as Node) ||
        marqueeRef.current?.contains(t.trigger as Node)
      ) {
        t.kill();
      }
    });
    ctx.revert();
  };
}, []);
```

---

## Summary of All File Changes

| File | Action | What Changes |
|------|--------|-------------|
| `components/GsapCleaner.tsx` | **CREATE** | New wrapper component that kills ScrollTriggers on route change |
| `app/layout.tsx` | **EDIT** | Import + wrap `{children}` with `<GsapCleaner>` |
| `components/ServiceSlides.tsx` | **EDIT** | Add explicit `ScrollTrigger.kill()` before `ctx.revert()` in cleanup |
| `components/WhoWeAre.tsx` | **EDIT** | Add explicit `ScrollTrigger.kill()` before `ctx.revert()` in cleanup |
| `app/home/page.tsx` | **EDIT** | Add `ScrollTrigger` import + explicit kill in cleanup |

---

## Why This Works

```
Before fix:
  Link click → React unmounts → DOM has pin-spacers → removeChild fails ❌

After fix:
  Link click → pathname changes → GsapCleaner kills all ScrollTriggers
    → pin-spacers removed → DOM matches React's expectation
    → React unmounts → removeChild succeeds ✅

  (Plus component-level hardening as defense-in-depth)
```

The global `GsapCleaner` handles the timing issue (cleanup before unmount), while the component-level explicit kills provide defense-in-depth for edge cases.

"use client";

import { useEffect, useLayoutEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Safety guard: GSAP's `pin: true` wraps pinned elements in <pin-spacer> divs,
// directly mutating the DOM that React manages.  When React later tries to
// `removeChild()` during unmount it fails because the node is no longer a
// direct child of the parent React recorded.  We patch `removeChild` once so
// that it gracefully handles this case instead of throwing.
// ---------------------------------------------------------------------------

let patchApplied = false;

/**
 * Wraps `{children}` in the layout. On every route change it kills all GSAP
 * ScrollTrigger instances (which removes pin-spacer wrappers) and all running
 * tweens so the DOM is clean before React mounts the new page.
 */
export default function GsapCleaner({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ── 1. Apply the global removeChild safety guard (once, client-only) ─
  useEffect(() => {
    if (!patchApplied && typeof Element !== "undefined") {
      const nativeRemoveChild = Element.prototype.removeChild;

      Element.prototype.removeChild = function <T extends Node>(
        this: Element,
        child: T
      ): T {
        // Fast-path – the child is still where React expects it
        if (child.parentNode === this) {
          return nativeRemoveChild.call(this, child) as T;
        }

        // GSAP (or another library) moved the node – remove it from its
        // *actual* parent instead so the DOM stays consistent.
        if (child.parentNode) {
          try {
            (child.parentNode as Element).removeChild(child);
          } catch {
            // Swallow – the node may already have been removed elsewhere
          }
        }

        return child;
      };

      patchApplied = true;
    }
    // We intentionally never un-patch – the guard must stay active for the
    // entire lifetime of the SPA.
  }, []);

  // ── 2. Kill GSAP state on route change ───────────────────────────────
  // `useLayoutEffect` runs synchronously *after* DOM mutations but *before*
  // the browser paints.  Combined with the removeChild guard above this
  // ensures any remaining pin-spacers are cleaned up as early as possible.
  useLayoutEffect(() => {
    return () => {
      // Kill every ScrollTrigger – this reverts pin-spacer wrappers and
      // inline style mutations.
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearScrollMemory();

      // Kill all active GSAP tweens so they can't reference stale DOM nodes.
      gsap.killTweensOf("*");
    };
  }, [pathname]);

  return <>{children}</>;
}

"use client";

import { useEffect, useRef } from "react";

import { Button } from "./ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import gsap from "gsap";
import { useSidebar } from "./SidebarContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
];

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (isSidebarOpen) {
      // Animate in
      const tl = gsap.timeline();

      // Overlay fade in
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );

      // Sidebar slide in from right
      tl.fromTo(
        sidebarRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out" },
        "-=0.2"
      );

      // Items animate in one after another
      itemRefs.current.forEach((item, index) => {
        if (item) {
          tl.fromTo(
            item,
            { x: 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.25,
              ease: "power2.out",
            },
            `-=${0.15}` // Stagger effect
          );
        }
      });

      // Total animation time: ~0.3 + 0.4 + (0.25 * 4) = ~1.7s
    } else {
      // Animate out in reverse
      const tl = gsap.timeline({
        onComplete: () => {
          // Reset positions after animation completes
          gsap.set(sidebarRef.current, { x: "100%" });
          gsap.set(overlayRef.current, { opacity: 0 });
        },
      });

      // Items animate out in reverse order
      const reversedItems = [...itemRefs.current].reverse();
      reversedItems.forEach((item, index) => {
        if (item) {
          tl.to(
            item,
            {
              x: 50,
              opacity: 0,
              duration: 0.25,
              ease: "power2.in",
            },
            index === 0 ? undefined : `-=${0.15}`
          );
        }
      });

      // Sidebar slide out
      tl.to(
        sidebarRef.current,
        { x: "100%", duration: 0.4, ease: "power3.in" },
        `-=${0.2}`
      );

      // Overlay fade out
      tl.to(
        overlayRef.current,
        { opacity: 0, duration: 0.3 },
        `-=${0.2}`
      );

      // Total animation time: ~1.7s
    }
  }, [isSidebarOpen]);

  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/50 z-[9000] ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-[9001] ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className="block py-3 px-4 text-lg font-semibold text-gray-700 hover:text-[#e80500] hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                {item.name}
              </Link>
            </div>
          ))}

          {/* Contact Button */}
          <div ref={(el) => {
            itemRefs.current[3] = el;
          }}>
            <Link href="/contact" onClick={handleLinkClick}>
              <Button className="w-full mt-4 font-bold text-base">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import logo from "@/public/logo12.png";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const footerLinks = {
    services: [
      { name: "Audio-Visual Solutions", href: "/services#audio-visual" },
      { name: "Control Room Solutions", href: "/services#control-room" },
      { name: "CCTV Surveillance", href: "/services#video-surveillance" },
      { name: "Network Infrastructure", href: "/services#network-infrastructure" },
      { name: "Item Procurement", href: "/services#it-procurement" },
      { name: "more...", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
  };

  // GSAP ScrollTrigger animations for footer content
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const children = Array.from(contentRef.current.children);
        
        children.forEach((child, index) => {
          gsap.fromTo(
            child,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    });

    // Cleanup all GSAP animations
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      className={`relative z-10 h-auto bg-[#1b2232] text-white p-4 sm:px-16 md:px-10 lg:px-20`}
    >
      <div ref={contentRef} className="flex flex-col sm:flex-row sm:gap-0 gap-8 sm:items-end justify-between">
        <div>
          <Image src={logo} alt={"Hiqos_logo"} width={120} height={120} />
          <p className=" text-base sm:text-lg md:text-2xl font-semibold">
            Future-Ready Networks, Engineered Today.
          </p>
        </div>
        <Button className="w-fit cursor-pointer">
          <Link href={"/contact"}>Contact Us</Link>
        </Button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 md:gap-4 mt-8">
        <div className="md:col-span-2">
          <h2 className="font-bold font-dm-sans">HIQOS Ltd. HQ</h2>
          <p>
            41, Akin Osiyemi Street, <br /> Off Allen Avenue, Ikeja, Lagos,
            Nigeria. <br />
            Phone: +2348065022047 <br />
          </p>
        
          <h2 className="font-bold font-dm-sans mt-5">HIQOS International Office</h2>
          <p>
            415, Walnut Drive Murphy, <br /> Texas TX75094,
            USA. <br />
            Phone: +1972 499 4649 <br />
          </p>
          <div className="mt-5">
            <h2 className="font-bold text-lg font-dm-sans">Email</h2>
            <p className="font-dm-sans">
              For general inquiries: <br />
              <a href="mailto:business@hiqos.net" className="text-blue-400 hover:text-blue-300">
                business@hiqos.net
              </a> <br />
               <a href="mailto:sales@hiqos.net" className="text-blue-400 hover:text-blue-300">
                sales@hiqos.net
              </a>
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-lg pb-2">Services</h2>
          <ul className="space-y-2">
            {footerLinks.services.map((service) => {
              return (
                <li key={service.name} className="font-dm-sans">
                  <Link href={service.href}>{service.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg pb-2">Company</h2>
          <ul className="space-y-2">
            {footerLinks.company.map((service) => {
              return (
                <li key={service.name} className="font-dm-sans">
                  <Link href={service.href}>{service.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <hr className="border-white my-10" />

      <div className="flex justify-end sm:justify-end max-sm:justify-center gap-3 mb-3">
        {/* X (Twitter) */}
        <Link href="https://x.com/hiqos_tech_ltd" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>
        {/* Instagram */}
        <Link href="https://www.instagram.com/hiqos_tech_ltd?igsh=MWg5ZnlvNnIwbnMwcw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </Link>
        {/* TikTok */}
        <Link href="https://www.tiktok.com/@hiqos_tech_ltd?_r=1&_t=ZS-92omiXy5RD8" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}

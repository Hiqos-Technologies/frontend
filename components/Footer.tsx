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
      { name: "Audio-Visual Solutions", href: "#" },
      { name: "Control Room Solutions", href: "#" },
      { name: "CCTV Surveillance", href: "#" },
      { name: "Network Infrastructure", href: "#" },
      { name: "Item Procurement", href: "#" },
      { name: "more...", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#" },
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

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 mt-8">
        <div className="md:col-span-2">
          <h2 className="font-bold font-dm-sans">HIQOS Ltd. HQ</h2>
          <p>
            41, Akin Osiyemi Street, <br /> Off Allen Avenue, Ikeja, Lagos,
            Nigeria. <br />
            Phone: +234 1 342 5678 <br />
          </p>
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
    </footer>
  );
}

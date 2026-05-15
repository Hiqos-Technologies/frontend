"use client";

import { useEffect, useRef } from "react";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate the whole section in when it scrolls into view
      gsap.from(sectionRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white min-h-screen flex items-center overflow-hidden"
    >
      <div className="w-full px-6 sm:px-12 md:px-20 lg:px-32 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Side — Text + CTA */}
          <div className="lg:w-5/12 flex flex-col justify-center bg-white relative z-10 shrink-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-[#e80500] via-[#333] to-[#1b2232] bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              We help clients deploy systems that are secure, scalable, and
              aligned with operational goals. With years of industry expertise,
              we deliver technology solutions that drive efficiency and protect
              what matters most.
            </p>

            <ul className="space-y-2 mb-8 max-w-lg">
              <li className="flex items-start gap-3 text-gray-700 text-base sm:text-lg">
                <Check className="w-5 h-5 mt-1 shrink-0 text-[#e80500]" strokeWidth={3} />
                <span>Trusted technology partner for enterprise clients</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 text-base sm:text-lg">
                <Check className="w-5 h-5 mt-1 shrink-0 text-[#e80500]" strokeWidth={3} />
                <span>Experts in secure, scalable infrastructure solutions</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700 text-base sm:text-lg">
                <Check className="w-5 h-5 mt-1 shrink-0 text-[#e80500]" strokeWidth={3} />
                <span>Proven track record across multiple industries</span>
              </li>
            </ul>

            <Link href="/about" className="group inline-block w-fit">
              <span className="relative inline-flex items-center justify-center px-6 py-2 border-2 border-[#333] rounded-lg text-[#1b2232] font-semibold overflow-hidden transition-colors duration-300">
                {/* Hover sweep overlay */}
                <span className="absolute inset-0 bg-[#1b2232] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
                {/* Button text stays on top */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Learn More
                </span>
              </span>
            </Link>
          </div>

          {/* Right Side — Single Image */}
          <div className="lg:w-7/12 w-full relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/control_room2.jpg"
                alt="Hiqos control room solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

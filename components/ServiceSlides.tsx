"use client";

import React, { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// import Image from "next/image";



gsap.registerPlugin(ScrollTrigger);

export default function ServiceSlides() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rightText = rightTextRef.current;
    const leftText = leftTextRef.current;
    const images = imageRef.current;

    if (!section || !rightText || !leftText || !images) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(rightText, { x: "-100%" }, { x: "100%", ease: "none" }, 400);
    tl.fromTo(leftText, { x: "100%" }, { x: "-100%", ease: "none" }, +1000);

    tl.fromTo(images, { y: "0%" }, { y: "-50%", ease: "none" }, 0);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen relative overflow-hidden  bg-[#1b2232]"
      >
        <div className="absolute z-10 top-1/5 right-1/7 flex items-center justify-center">
          <div
            ref={leftTextRef}
            className="text-2xl sm:text-5xl md:text-6xl font-bold  text-transparent [-webkit-text-stroke:2px_#3b82f6] whitespace-nowrap"
          >
            Audio Visual Solutions
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={rightTextRef}
            className="text-2xl sm:text-5xl md:text-6xl font-bold text-transparent 
             [-webkit-text-stroke:2px_white] 
             drop-shadow-[4px_4px_0px_rgba(209,34,23,1)] whitespace-nowrap"
          >
            RIGHT FUTURE READY NETWORKS
          </div>
        </div>
{/* 
        <div
          ref={imageRef}
          className="absolute right-100 top-100 flex  gap-10"
              >
                  <Image src="/connect.jpg" width={200} height={200} alt="Service 1" />
                  
        </div> */}
      </section>
    </>
  );
}

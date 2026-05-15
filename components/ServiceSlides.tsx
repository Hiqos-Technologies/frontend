"use client";

import React, { useLayoutEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// import Image from "next/image";



gsap.registerPlugin(ScrollTrigger);

export default function ServiceSlides() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollArrowRef = useRef<HTMLDivElement>(null);
  const audioVisualRef = useRef<HTMLDivElement>(null);
  const futureNetworksRef = useRef<HTMLDivElement>(null);
  const intrusionRef = useRef<HTMLDivElement>(null);
  const itSupportRef = useRef<HTMLDivElement>(null);
  const accessControlRef = useRef<HTMLDivElement>(null);
  const controlRoomRef = useRef<HTMLDivElement>(null);
  const itProcurementRef = useRef<HTMLDivElement>(null);
  const networkInfraRef = useRef<HTMLDivElement>(null);
  const videoSurveillanceRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const scrollArrow = scrollArrowRef.current;
    const audioVisual = audioVisualRef.current;
    const futureNetworks = futureNetworksRef.current;
    const intrusion = intrusionRef.current;
    const itSupport = itSupportRef.current;
    const accessControl = accessControlRef.current;
    const controlRoom = controlRoomRef.current;
    const itProcurement = itProcurementRef.current;
    const networkInfra = networkInfraRef.current;
    const videoSurveillance = videoSurveillanceRef.current;

    if (!section || !scrollArrow || !audioVisual || !futureNetworks || !intrusion || !itSupport ||
        !accessControl || !controlRoom || !itProcurement || !networkInfra || !videoSurveillance) return;

    const ctx = gsap.context(() => {

      // Bouncing scroll-arrow animation
      gsap.to(scrollArrow, {
        y: 16,
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end:()=> `+=${window.innerHeight * 2}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Fade out the scroll arrow once user starts scrolling
            if (self.progress > 0.02) {
              gsap.to(scrollArrow, { opacity: 0, duration: 0.4, ease: "power2.out" });
            } else {
              gsap.to(scrollArrow, { opacity: 1, duration: 0.4, ease: "power2.out" });
            }
          },
        },
      });
      
      // Animate all services in sequence as user scrolls
      tl.fromTo(audioVisual, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.1);
      tl.fromTo(futureNetworks, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0);
      tl.fromTo(intrusion, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.2);
      tl.fromTo(itSupport, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.3);
      tl.fromTo(accessControl, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.4);
      tl.fromTo(controlRoom, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.5);
      tl.fromTo(itProcurement, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.6);
      tl.fromTo(networkInfra, { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.7);
      tl.fromTo(videoSurveillance, { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, ease: "power2.out" }, 0.8);
    }, sectionRef);

    return () => {
      // Explicitly kill ScrollTrigger instances to remove pin-spacer
      // wrappers BEFORE React unmounts the DOM tree
      ScrollTrigger.getAll().forEach((t) => {
        if (section && (t.trigger === section || section.contains(t.trigger as Node))) {
          t.kill();
        }
      });
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative">
      <div
        ref={sectionRef}
        className="h-screen relative z-0 overflow-hidden  bg-[#1b2232]"
      >
        {/* Audio Visual Solutions - slides from right */}
        <div className="absolute z-10 left-5 lg:top-1/3 md:top-90 top-1/4 md:right-1/8 sm:right-1/6 flex items-center justify-center">
          <div
            ref={audioVisualRef}
            className="text-[28px] whitespace-nowrap sm:text-5xl md:text-6xl font-bold text-transparent [-webkit-text-stroke:2px_#3b82f6] opacity-0 translate-x-full"
          >
            Audio Visual Solutions
          </div>
        </div>

        {/* Future Ready Networks - slides from left */}
        <div className="absolute sm:inset-0  top-80 left-5 flex items-center justify-center">
          <div
            ref={futureNetworksRef}
            className="text-[28px] whitespace-nowrap sm:text-5xl md:text-6xl text-white font-bold
             drop-shadow-[2px_1px_2px_rgba(209,34,23,1)] opacity-0 -translate-x-full"
          >
            Future Ready Networks
          </div>
        </div>

        {/* Intrusion Detection System - slides from right */}
        <div className="absolute max-[400px]:top-5/15 z-10 lg:top-58 top-64 sm:top-60 left-1/5 flex items-center justify-center">
          <div
            ref={intrusionRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-yellow-400 opacity-0 translate-x-full"
          >
            Intrusion Detection System
          </div>
        </div>


      {/* IT Support - slides from left */}
      <div className="absolute lg:top-110 md:top-120 top-70 sm:top-95 left-1/4 flex items-center justify-center">
          <div
            ref={itSupportRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-[#3b82f6] opacity-0 -translate-x-full"
          >
            IT Support
          </div>
        </div>

        {/* Access Control - slides from right */}
        <div className="absolute z-10 lg:top-130 top-90 md:bottom-10 sm:bottom-50 right-1/5 flex items-center justify-center">
          <div
            ref={accessControlRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff1100] opacity-0 translate-x-full"
          >
            Access Control
          </div>
        </div>



    
      <div className="absolute lg:top-110 md:top-125 top-100 left-1/5 sm:bottom-1/4 sm:left-1/3 flex items-center justify-center">
          <div
            ref={controlRoomRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-white/90 opacity-0 -translate-x-full"
          >
            Control Room
          </div>
        </div>


        <div className="absolute max-[400px]:bottom-1/15 bottom-3/7 sm:bottom-30 right-1/3 flex items-center justify-center">
          <div
            ref={itProcurementRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0ff] opacity-0 translate-x-full"
          >
            IT Procurement
          </div>
        </div>

         {/* Network Infrastructure - slides from left */}
         <div className="absolute z-10 lg:top-1/6 md:top-45 top-1/5 sm:left-1/4 left-1/5 flex items-center justify-center">
          <div
            ref={networkInfraRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-[#15ff00] opacity-0 -translate-x-full"
          >
            Network Infrastructure
          </div>
        </div>



              {/* Video Surveillance System - slides from right */}
              <div className="absolute max-[400px]:bottom-3/15 lg:bottom-2/10 md:bottom-70 bottom-3/8 sm:bottom-1/10 left-1/11 md:left-1/9 sm:left-1/5 flex items-center justify-center">
          <div
            ref={videoSurveillanceRef}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#ff7300] opacity-0 translate-x-full"
          >
            Video Surveillance System
          </div>
        </div>



        {/* Scroll-down indicator arrow */}
        <div
          ref={scrollArrowRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </div>


      </div>
    </section>
  );
}

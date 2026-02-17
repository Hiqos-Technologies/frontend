"use client";

import React, { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// import Image from "next/image";



gsap.registerPlugin(ScrollTrigger);

export default function ServiceSlides() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const audioVisualRef = useRef<HTMLDivElement>(null);
  const futureNetworksRef = useRef<HTMLDivElement>(null);
  const intrusionRef = useRef<HTMLDivElement>(null);
  const itSupportRef = useRef<HTMLDivElement>(null);
  const accessControlRef = useRef<HTMLDivElement>(null);
  const controlRoomRef = useRef<HTMLDivElement>(null);
  const itProcurementRef = useRef<HTMLDivElement>(null);
  const networkInfraRef = useRef<HTMLDivElement>(null);
  const videoSurveillanceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const audioVisual = audioVisualRef.current;
    const futureNetworks = futureNetworksRef.current;
    const intrusion = intrusionRef.current;
    const itSupport = itSupportRef.current;
    const accessControl = accessControlRef.current;
    const controlRoom = controlRoomRef.current;
    const itProcurement = itProcurementRef.current;
    const networkInfra = networkInfraRef.current;
    const videoSurveillance = videoSurveillanceRef.current;

    if (!section || !audioVisual || !futureNetworks || !intrusion || !itSupport ||
        !accessControl || !controlRoom || !itProcurement || !networkInfra || !videoSurveillance) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * 2}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
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

    // Cleanup function to prevent memory leaks
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen relative z-0 overflow-hidden  bg-[#1b2232]"
      >
        {/* Audio Visual Solutions - slides from right */}
        <div className="absolute z-10 left-5 top-1/4 sm:right-1/6 flex items-center justify-center">
          <div
            ref={audioVisualRef}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent [-webkit-text-stroke:2px_#3b82f6] whitespace-nowrap"
          >
            Audio Visual Solutions
          </div>
        </div>

        {/* Future Ready Networks - slides from left */}
        <div className="absolute sm:inset-0 top-80 left-5 flex items-center justify-center">
          <div
            ref={futureNetworksRef}
            className="text-3xl sm:text-5xl md:text-6xl text-white font-bold            
             drop-shadow-[2px_1px_2px_rgba(209,34,23,1)] whitespace-nowrap"
          >
            Future Ready Networks
          </div>
        </div>

        {/* Intrusion Detection System - slides from right */}
        <div className="absolute z-10 top-60 sm:top-60 left-1/5 flex items-center justify-center">
          <div
            ref={intrusionRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-yellow-400 whitespace-nowrap"
          >
            Intrusion Detection System
          </div>
        </div>


      {/* IT Support - slides from left */}
      <div className="absolute top-70 sm:top-95 left-1/4 flex items-center justify-center">
          <div
            ref={itSupportRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-[#3b82f6]
              whitespace-nowrap"
          >
            IT Support
          </div>
        </div>

        {/* Access Control - slides from right */}
        <div className="absolute z-10 top-90 sm:bottom-50 right-1/5 flex items-center justify-center">
          <div
            ref={accessControlRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff1100] whitespace-nowrap"
          >
            Access Control
          </div>
        </div>



    
      <div className="absolute top-100 left-1/5 sm:bottom-1/4 sm:left-1/3 flex items-center justify-center">
          <div
            ref={controlRoomRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-white/90 whitespace-nowrap"
          >
            Control Room
          </div>
        </div>


        <div className="absolute bottom-3/7 sm:bottom-30 right-1/3 flex items-center justify-center">
          <div
            ref={itProcurementRef}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0ff] whitespace-nowrap"
          >
            IT Procurement
          </div>
        </div>

         {/* Network Infrastructure - slides from left */}
         <div className="absolute z-10 top-1/5 sm:left-1/4 left-1/5 flex items-center justify-center">
          <div
            ref={networkInfraRef}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-[#15ff00] whitespace-nowrap"
          >
            Network Infrastructure
          </div>
        </div>



              {/* Video Surveillance System - slides from right */}
              <div className="absolute bottom-3/8 sm:bottom-1/10 left-1/11 sm:left-1/5 flex items-center justify-center">
          <div
            ref={videoSurveillanceRef}
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#ff7300] whitespace-nowrap"
          >
            Video Surveillance System
          </div>
        </div>



      </section>
    </>
  );
}

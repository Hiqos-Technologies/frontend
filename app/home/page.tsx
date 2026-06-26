"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Info from "@/components/info";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhoWeAre from "@/components/WhoWeAre";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// import { Button } from "@/components/ui/button"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: "/AISolar.jpeg",
      title: "High Quality of Service",
      description: "Powering secure and connected environments",
      image2: "",
      text: "",
    },
    {
      image: "/working.jpg",
      title: "Expertise at the Core",
      description: "Experienced minds behind every solution",
    },
    {
      image: "/connectedWorld.jpeg",
      title: "Innovation & Technology",
      description: "Building the future with cutting-edge solutions",
    },
    {
      image: "/control_room.jpg",
      title: "Total Control. Total Visibility",
      description: "Advanced monitoring and control room systems",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    // Snapshot refs so cleanup reads stable values, not mutable .current
    const videoEl = videoContainerRef.current;
    const marqueeEl = marqueeRef.current;

    const ctx = gsap.context(() => {
      // Video container animation - animate in from bottom with scale
      if (videoEl) {
        gsap.fromTo(
          videoEl,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoEl,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Marquee animation - slide in from sides
      if (marqueeEl) {
        gsap.fromTo(
          marqueeEl,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: marqueeEl,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup: gsap.context() + ctx.revert() already kills every animation
    // and ScrollTrigger created inside it, so no manual kill loop is needed.
    return () => ctx.revert();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
        <div className="h-screen relative overflow-hidden">
          <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                quality={75}
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                    {slide.description}
                  </p>
                  {/* <Button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Contact Us
                </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-70 md:top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-70 md:top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-white"
                  : "w-3 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
      <WhoWeAre />
      <Info />
    
      <div ref={marqueeRef}>
        <Marquee/>
      </div>

      {/* CTA Banner */}
      <div className="mx-4 md:mx-8 lg:mx-16 my-12 rounded-2xl overflow-hidden border border-gray-200 flex flex-col-reverse md:flex-row">
        {/* Text side */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-8 md:p-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Available to Deliver Top Notch Services
          </h2>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Talk to an Expert
          </Link>
        </div>
        {/* Image side with overlay */}
        <div className="relative w-full md:w-1/2 h-64 md:h-80">
          <Image
            src="/working.jpg"
            alt="Our team at work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1b2232]/70" />
        </div>
      </div>
    </>
  );
}

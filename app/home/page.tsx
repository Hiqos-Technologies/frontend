"use client";

import { useEffect, useRef, useState } from "react";

import Marquee from "@/components/Marquee";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// import { Button } from "@/components/ui/button"

// Skeleton component
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300 ${className}`} />
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: "/interlinks.jpg",
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
      image: "/big_connected_devices.jpg",
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
    // Simulate loading - show skeleton for 1.5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(interval);
    };
  }, [slides.length]);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video container animation - animate in from bottom with scale
      if (videoContainerRef.current) {
        gsap.fromTo(
          videoContainerRef.current,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: videoContainerRef.current,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Marquee animation - slide in from sides
      if (marqueeRef.current) {
        gsap.fromTo(
          marqueeRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: marqueeRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Cleanup all GSAP animations
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
      {isLoading ? (
        // Skeleton loading state
        <div className="h-screen relative overflow-hidden bg-gray-100">
          <div className="relative h-full w-full">
            <Skeleton className="absolute inset-0 bg-gray-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                <Skeleton className="h-16 w-3/4 mx-auto mb-6 rounded" />
                <Skeleton className="h-8 w-1/2 mx-auto rounded" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Actual content
        <div className="h-screen relative overflow-hidden">
          <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
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
          className="absolute max-[400px]:left-1 sm:left-4 top-70 md:top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
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
          className="absolute max-[400px]:right-1 sm:right-4 top-70 md:top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300"
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
      )}
      <div ref={videoContainerRef} className='mb-8'>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="mx-auto w-full  max-w-4xl h-100 md:h-150 px-2 my-6 md:my-8 rounded-xl"
          poster="https://res.cloudinary.com/dvjx9x8l9/video/upload/v1770116282/Hiqos/vid_of_SAT_hzuyqq.jpg"
        >
          <source
            src="https://res.cloudinary.com/dvjx9x8l9/video/upload/vc_h264,q_auto,f_mp4/v1770116282/Hiqos/vid_of_SAT_hzuyqq.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <p className="font-dm-sans font-bold text-center">
          Audio Visual Installation Setup in Shell Atlantic Towers
        </p>
      </div>
    
      <div ref={marqueeRef}>
        <Marquee/>
      </div>
    </>
  );
}

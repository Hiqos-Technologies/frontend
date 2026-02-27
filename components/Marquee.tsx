"use client";

import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import gsap from 'gsap';

export default function Marquee() {

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width of one set of images (half of total since we duplicated)
    const singleSetWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -singleSetWidth,
      ease: "none",
      duration: 40,
      repeat: -1,
    });

    return () => {
      tween.kill();
    };

  }, [])




    const ClientImages: string[] = [
      "/shell.png",
      "/chevron.png",
      "/totalenergies.webp",
      "/access.png",
      "/Makon.png",
      "/MPR.svg",
      "/Uba.svg",
      "/MMA2.png",
      "/bowen.webp",
      "/Seplat.svg",
      "/babcock.png",
      "/nigcomsat.png",
      "/oau.jpeg"
    ]


  return (
    <>
      <h2 className=' sm:px-16 md:px-10 lg:px-20  text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-linear-to-r from-white via-[#e80500] to-[#1b2232] bg-clip-text text-transparent'>Our Clients</h2>
      <div className='w-full overflow-hidden py-8'>
        <div ref={trackRef} className='flex w-max gap-35 items-center'>
          {[...ClientImages, ...ClientImages].map((src, index) => (
            <div key={index} className='shrink-0 w-32 h-16 relative'>
              <Image
                src={src}
                alt={`Client ${index}`}
                fill
                priority
                className='object-contain'
                sizes="148px"
              />
            </div>
          ))}
        </div>

      </div>
    
    </>
  );
}

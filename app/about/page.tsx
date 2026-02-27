/* eslint-disable @next/next/no-img-element */
"use client";

import { Binoculars, Crosshair, Goal } from "lucide-react";
import React, { useEffect, useRef } from "react";

import Crescent from "@/components/Crescent";
import Image from "next/image";
import Organogram from "@/components/organogram";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const partnersSectionRef = useRef<HTMLDivElement>(null);
  const partnersHeadingRef = useRef<HTMLHeadingElement>(null);


  const images = [
    "/Saeed.jpeg",
    "/telephony.jpg",
    "/img1.jpg",
    "/img2.jpg",

  ];

  useEffect(() => {
    const imgs = containerRef.current?.querySelectorAll(".animate-img");

    if (!imgs || imgs.length===0) return;

    const tl = gsap.timeline({ repeat: -1 });
  imgs.forEach((img) => {
    tl.fromTo(
      img,
      { x: 120, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    )
      .to(img, { opacity: 1, duration: 2 }) // stay visible
      .to(img, {
        x: -120,
        opacity: 0,
        duration: 2,
        ease: "power2.in",
      });
  });

  timelineRef.current = tl;

  return () => {
    tl.kill();
  };

  }, []);

  // Partners section intersection observer animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading drop-in animation
      if (partnersHeadingRef.current) {
        gsap.fromTo(
          partnersHeadingRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: partnersSectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Partner cards animations from different directions
      if (partnersSectionRef.current) {
        const partnerCards = Array.from(
          partnersSectionRef.current.querySelectorAll("[data-partner-card]")
        );

        partnerCards.forEach((card, index) => {
          // Determine animation direction based on index
          const direction = index % 3; // 0: right, 1: left, 2: bottom
          const fromProps: { opacity: number; x?: number; y?: number } = { opacity: 0 };

          if (direction === 0) {
            fromProps.x = 100; // from right
          } else if (direction === 1) {
            fromProps.x = -100; // from left
          } else {
            fromProps.y = 100; // from bottom
          }

          gsap.fromTo(
            card,
            fromProps,
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.05, // stagger effect
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
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
    <>
      <div className="bg-[#1b2232]">

          <h1 className="text-4xl font-bold text-white text-center pt-25 pb-6">About Us</h1>
      <div className=" h-auto sm:p-8 flex flex-col md:flex-row w-11/12 mx-auto overflow-hidden gap-8 items-center justify-center">

        <div className=" px-3 sm:px-6 py-4 bg-[#f5f5f5] rounded font-montserrat">
          <p className="text-center md:text-justify  text-[#1b2232] mt-4 text-lg md:max-w-2xl mx-auto">
            HIQOS, an acronym for &quot;High Quality of Service&quot; is a versatile Information Technology company registered
            by Corporate Affairs Commission (CAC) on April 19, 1996, under the Company Allied Matters Act of 1990 to offer innovative technologies and solutions for complex communication
            needs specializing in Audio-Visual, Security Technologies & IT Infrastructural Services to meet organizational business needs.
          </p>
          <p className="text-center md:text-justify text-[#1b2232] mt-4 text-lg max-w-2xl mx-auto">
            Our company partners with leading global companies in various industries, the likes of Crestron, Extron, Pelco, ClearOne,
            Barco, Cisco, NetApp, Hp, Microsoft & Other technology products vendors in design and implementation of various projects; essentially Audio-Visual collaborations, Security systems & IT Infrastructure for highly esteemed customers.
          </p>
          <p className="text-center md:text-justify text-[#1b2232] mt-4 text-lg max-w-2xl mx-auto">At HIQOS, safety is of the essence in the execution of projects which make our staff equipped with standard safety trainings such as BOSIET, HUET, Firstaid, Emergency response and Standard HSE Training.</p>
          <p className="text-center md:text-justify text-[#1b2232] mt-4 text-lg max-w-2xl mx-auto">Our management and technical team comprise of experienced technology professionals who have worked with industry leaders with international certifications</p>
        </div>

        <div ref={containerRef}
          onMouseEnter={() => timelineRef.current?.pause()}
          onMouseLeave={() => timelineRef.current?.resume()}
          className="img relative h-100 md:h-162.5 w-full md:w-125 overflow-hidden">
          {images.map((image, index) => (
            <div key={`${image} + ${index}`} className="animate-img absolute inset-0 flex items-center justify-center">
              <img
                src={image}
                alt=""
                width={300}
                height={300}
                className=" object-contain md:object-cover w-full h-full"
                />
            </div>
          ))}
        </div>
                </div>

      </div>


      {/* This is the Crescent area  */}

      <div className=" p-5 min-h-[110vh] z-0 relative bg-[#f5f5f5]">
        <div className="flex flex-col items-center justify-center border-4 gap-4 min-[1000px]:hidden">
          <Crescent
            color="#4f46e5"
            maskId="crescent-mask-1"
            className="w-fit mx-auto"
            title="Our Vision"
            text="Our primary purpose is to build a distinct brand known for delivering high quality customer services across Africa at affordable cost in the field of technology"
            icon={<Binoculars size={24} color="white" />}
            cutX={-20}
            cutY={205}
            cutR={100}
          />

          <Crescent
            color="#e80500"
            maskId="crescent-mask-2"
            className="w-fit mx-auto"
            title="Our Mission"
            text="Delivering high-impact, cost-effective solutions by aligning with client needs and empowering motivated teams to drive maximum ROI. "
            icon={<Goal size={24} color="white" />}
            cutY={140}
            cutR={75}
            cutX={255}
          />
          <Crescent
            color="#1b2232"
            maskId="crescent-mask-3"
            className="w-fit mx-auto"
            title="Core Values"
            text="Service | Loyalty | Integrity | Innovation | Teamwork | Value Creation | Expertise | Ethics | Safety "
            icon={<Crosshair size={24} color="white" />}
            cutY={-37}
            cutR={85}
            cutX={69}
          />
        </div>
        <div className="hidden min-[1000px]:block">
          <Crescent
            color="#4f46e5"
            maskId="crescent-mask-4"
            className=" w-fit absolute top-10 left-110"
            title="Our Vision"
            text="Our primary purpose is to build a distinct brand known for delivering high quality customer services across Africa at affordable cost in the field of technology"
            icon={<Binoculars size={24} color="white" />}
            cutX={-20}
            cutY={205}
            cutR={100}
          />

          <Crescent
            color="#e80500"
            maskId="crescent-mask-5"
            className=" w-fit absolute left-52.5 top-59"
            title="Our Mission"
            text="Delivering high-impact, cost-effective solutions by aligning with client needs and empowering motivated teams to drive maximum ROI. "
            icon={<Goal size={24} color="white" />}
            cutY={140}
            cutR={75}
            cutX={255}
          />
          <Crescent
            color="#1b2232"
            maskId="crescent-mask-6"
            className=" w-fit absolute right-93 top-79"
            title="Core Values"
            text="Service | Loyalty | Integrity | Innovation | Teamwork | Value Creation | Expertise | Ethics | Safety "
            icon={<Crosshair size={24} color="white" />}
            cutY={-37}
            cutR={87}
            cutX={70}
          />
        </div>
      </div>

      <div ref={partnersSectionRef} className="p-4 sm:px-10 md:px-16">
        <h2 ref={partnersHeadingRef} className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-linear-to-r from-white via-[#e80500] to-[#1b2232] bg-clip-text text-transparent p-4">Our Partners</h2>
        <div className="flex flex-col  sm:grid lg:grid-cols-9  sm:grid-cols-3 md:grid-cols-6 lg:grid-rows-3 gap-4 auto-rows-[minmax(130px,auto)]">
          <div data-partner-card className="bg-gray-100 col-start-1 md:col-span-3 lg:col-span-3 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src="/Microsoft.png" alt="icon" width={200} height={150} />
          </div>
          <div data-partner-card className="bg-blue-900 max-sm:h-30 lg:col-start-4 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src="/crestron.png" alt="icon" width={170} height={150} />
          </div>
          <div data-partner-card className="bg-[#ffe] shadow-md md:col-span-2 lg:col-start-5 lg:col-span-2 row-span-2 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src="/pelco.png" alt="icon" width={200} height={200}/>
          </div>
          <div data-partner-card className="bg-black lg:col-start-7 py-2 lg:col-span-2 flex items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
             <Image src={"/barco.png"} alt={"icon"} width={110} height={50} />
          </div>
          <div data-partner-card className="bg-green-700 max-sm:h-30 px-2 md:col-start-1 lg:col-start-9 lg:row-start-1  md:row-start-4 max-xl:col-span-2 flex items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/Cyviz.png"} alt={"icon"} width={110} height={50} />
          </div>
          <div className="flex items-center max-sm:h-30 justify-center gap-2 col-span-2 lg:row-start-2 md:row-start-2">

          <div data-partner-card className="bg-blue-100 w-full h-full flex items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src="/NetApp.png" alt="" width={70} height={100}/>
          </div>
          <div data-partner-card className="shadow-md w-full h-full flex items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/hp.png"} alt={"icon"} width={80} height={100}/>
          </div>
          </div>
          <div data-partner-card className="bg-yellow-400 max-sm:h-30 flex lg:col-start-3 col-span-2 md:col-start-5 md:row-start-3 items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/Samsung.png"} alt={"icon"} width={200} height={70} />
          </div>
          <div data-partner-card className="bg-orange-300 max-sm:h-30 px-2 md:col-span-2 md:col-start-4 lg:col-start-3 flex items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/evinsys.webp"} alt={"icon"} width={200} height={70} />
          </div>
          <div data-partner-card className="bg-green-100 max-sm:h-40 sm:col-span-2 md:col-span-full lg:col-span-3 flex items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/Cisco.png"} alt={"icon"} width={150} height={90}/>
          </div>
          <div data-partner-card className="bg-purple-200 max-sm:h-30 flex md:col-start-6 lg:col-start-8 sm:col-start-3 sm:row-start-6 lg:row-start-3 md:row-start-4 items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/extron.png"} alt={"icon"} width={100} height={50}/>
          </div>
          <div data-partner-card className="bg-pink-200 max-sm:h-35 flex lg:col-start-1 col-span-2 row-start-3 items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/flir.svg"} alt={"icon"} width={130} height={70}/>
          </div>
          <div data-partner-card className="bg-amber-100 max-sm:h-38 lg:col-start-8 row-start-2 col-span-2 flex items-center justify-center rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
            <Image src={"/axis.png"} alt={"icon"} width={120} height={70}/>
          </div>
          <div data-partner-card className="bg-white shadow-md sm:col-start-3 sm:row-start-5 lg:col-start-7 md:col-start-1 md:row-start-3 lg:row-start-2 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
             <Image src={"/clearone.png"} alt={"icon"} width={120} height={70}/>
          </div>

<div data-partner-card className="bg-white px-1.5 shadow-md max-sm:h-30 lg:col-start-9 row-start-3 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 hover:shadow-xl cursor-pointer">
             <Image src={"/qsys.png"} alt={"icon"} width={120} height={70}/>
          </div>
        </div>
      </div>
      
      {/* Organogram Section */}
      <div>

      <Organogram />
      </div>
    </>
  );



}




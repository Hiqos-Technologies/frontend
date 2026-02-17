/* eslint-disable @next/next/no-img-element */
"use client";

import { Binoculars, Crosshair, Goal } from "lucide-react";
import React, { useEffect, useRef } from "react";

import Crescent from "@/components/Crescent";
import Organogram from "@/components/organogram";
import gsap from "gsap";

export default function About() {

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);


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
          className="img relative h-[400px] md:h-[650px] w-full md:w-[500px] overflow-hidden">
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

      {/* Organogram Section */}
      <Organogram />
    </>
  );













    // <div className="my-25 h-screen  z-0 relative border-2 bg-[#f5f5f5]">
        

    //         <Crescent
    //           color="#4f46e5"
    //         maskId="crescent-mask-1"
    //         className=" w-fit absolute top-10 left-110"
    //           title="Our Vision"
    //           text="Our primary purpose is to build a distinct brand known for delivering high quality customer services across Africa at affordable cost in the field of technology"
    //         icon={<Binoculars size={24} color="white" />}
    //         cutX={-20} cutY={205} cutR={100}
            
    //           />
              
    //     <Crescent
    //           color="#e80500"
    //       maskId="crescent-mask-2"
    //       className=" w-fit absolute left-51 top-58"
    //           title="Our Mission"
    //           text="Delivering high-impact, cost-effective solutions by aligning with client needs and empowering motivated teams to drive maximum ROI. "
    //       icon={<Goal size={24} color="white" />}
    //       cutY={140}
    //       cutR={75}
    //       cutX={255}
        
    //     />
    //     <Crescent
    //           color="#1b2232"
    //       maskId="crescent-mask-3"
    //       className=" w-fit absolute right-93 top-79"
    //           title="Core Values"
    //           text="Service | Loyalty | Integrity | Innovation | Teamwork | Value Creation | Customer Satisfaction"
    //       icon={<Crosshair size={24} color="white" />}
    //       cutY={-37}
    //       cutR={87}
    //       cutX={74}
        
    //         />
    //       </div>


    //       </>


}

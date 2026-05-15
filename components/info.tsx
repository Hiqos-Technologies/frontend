"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "why-hiqos",
    heading: "Why Hiqos?",
    subheading: "Trusted Technology Partner",
    description:
      "We combine deep industry expertise with cutting-edge solutions to deliver systems that are secure, scalable, and built for the future.",
    image: "/WhyHiqos1.jpeg",
    imageAlt: "Hiqos control room solutions",
    imagePosition: "left" as const,
  },
  {
    id: "our-expertise",
    heading: "Our Expertise",
    subheading: "End-to-End Solutions",
    description:
      "From procurement and installation to maintenance and support, we manage the full lifecycle of your technology infrastructure.",
    image: "/engineers.jpeg",
    imageAlt: "Hiqos conference room setup",
    imagePosition: "right" as const,
  },
  {
    id: "our-commitment",
    heading: "Our Commitment",
    subheading: "Quality Without Compromise",
    description:
      "Every project we deliver reflects our commitment to excellence, reliability, and long-term client satisfaction.",
    image: "/Commitment.jpeg",
    imageAlt: "Hiqos team at work",
    imagePosition: "left" as const,
  },
];

export default function Info() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const imageEl = section.querySelector("[data-info-image]");
        const textEl = section.querySelector("[data-info-text]");

        const isImageLeft = sections[index].imagePosition === "left";

        // Image slides in from its own side
        if (imageEl) {
          gsap.from(imageEl, {
            x: isImageLeft ? -120 : 120,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none none",
            },
          });
        }

        // Text slides in from the opposite side
        if (textEl) {
          gsap.from(textEl, {
            x: isImageLeft ? 120 : -120,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-navyblue.jpg"
          alt="Navy blue background"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={75}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0a1628]/80" />
      </div>

      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-32 py-20 md:py-28">
        <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-28">
          {sections.map((section, index) => (
            <article
              key={section.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${
                section.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              {/* Image side */}
              <div data-info-image className="lg:w-1/2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text side */}
              <div data-info-text className="lg:w-1/2 w-full flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-montserrat">
                  {section.heading}
                </h2>
                <p className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4 font-dm-sans">
                  {section.subheading}
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg font-dm-sans">
                  {section.description}
                </p>

                <Link
                  href="/services"
                  className="group inline-block w-fit"
                >
                  <span className="relative inline-flex items-center justify-center px-6 py-2 border-2 border-white/60 rounded-lg text-white font-semibold overflow-hidden transition-colors duration-300">
                    {/* Hover sweep overlay */}
                    <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
                    {/* Button text stays on top */}
                    <span className="relative z-10 group-hover:text-[#0a1628] transition-colors duration-300">
                      Learn More
                    </span>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

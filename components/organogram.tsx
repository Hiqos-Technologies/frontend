"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Image Container */}
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
                  width={200}
                  height={200}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Info Overlay - Animates from top to bottom on hover */}
      <div className="absolute inset-x-0 bottom-0 top-0 flex translate-y-full flex-col justify-end bg-linear-to-t from-[#1b2232]/95 via-[#1b2232]/80 to-transparent p-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
        <div className="transform translate-y-4 opacity-0 transition-all duration-300 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-sm text-gray-300">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

// Leaders Section Component
const LeadersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading drop-in animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Leader cards animations
      if (sectionRef.current) {
        const leaderCards = Array.from(
          sectionRef.current.querySelectorAll("[data-leader-card]")
        );

        leaderCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
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

  const leaders: TeamMember[] = [
    {
      name: "CEO Name",
      role: "Chief Executive Officer",
      image: "/Saeed.jpeg",
    },
    {
      name: "CTO Name",
      role: "Chief Technology Officer",
      image: "/saeed1.jpeg",
    },
    {
      name: "COO Name",
      role: "Chief Operating Officer",
      image: "/AVatFMH.jpeg",
    },
    {
      name: "CFO Name",
      role: "Chief Financial Officer",
      image: "/Work at SAT.jpeg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 px-4 md:px-8 lg:px-16">
      <h2 ref={headingRef} className=" text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-linear-to-r from-white via-[#e80500] to-[#1b2232] bg-clip-text text-transparent">
        Meet our Leaders
      </h2>

      {/* Grid System - First row: 1, Second row: 3 */}
      <div className="mx-auto max-w-7xl">
        {/* First Row - Single Leader */}
        <div className="mb-6 flex justify-center">
          <div className="w-full max-w-md" data-leader-card>
            <TeamMemberCard member={leaders[0]} />
          </div>
        </div>

        {/* Second Row - Three Leaders */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.slice(1, 4).map((leader, index) => (
            <div key={`leader-${index}`} data-leader-card>
              <TeamMemberCard member={leader} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Section Component
const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading drop-in animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Team member cards animations from different directions
      if (sectionRef.current) {
        const teamCards = Array.from(
          sectionRef.current.querySelectorAll("[data-team-card]")
        );

        teamCards.forEach((card, index) => {
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
              delay: index * 0.05,
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

  const teamMembers: TeamMember[] = [
    {
      name: "Team Member 1",
      role: "Senior Engineer",
      image: "/img1.jpg",
    },
    {
      name: "Team Member 2",
      role: "Project Manager",
      image: "/img2.jpg",
    },
    {
      name: "Team Member 3",
      role: "UI/UX Designer",
      image: "/img3.jpg",
    },
    {
      name: "Team Member 4",
      role: "Backend Developer",
      image: "/img4.jpg",
    },
    {
      name: "Team Member 5",
      role: "Frontend Developer",
      image: "/men_work.jpg",
    },
    {
      name: "Team Member 6",
      role: "Quality Assurance",
      image: "/met_at_work.jpg",
    },
    {
      name: "Team Member 7",
      role: "DevOps Engineer",
      image: "/working.jpg",
    },
    {
      name: "Team Member 8",
      role: "Business Analyst",
      image: "/work on going SAT.jpeg",
    },
    {
      name: "Team Member 9",
      role: "Technical Lead",
      image: "/camera.jpg",
    },
    {
      name: "Team Member 10",
      role: "System Administrator",
      image: "/con_room.jpg",
    },
    {
      name: "Team Member 11",
      role: "Security Engineer",
      image: "/control_room.jpg",
    },
    {
      name: "Team Member 12",
      role: "Network Engineer",
      image: "/connected_devices.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-16">
      <h2 ref={headingRef} className=" text-4xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-linear-to-r from-white via-[#e80500] to-[#1b2232] bg-clip-text text-transparent">
        Meet the Team
      </h2>

      {/* Grid System - 4 columns, 3 rows (responsive) */}
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={`team-${index}`} data-team-card>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Organogram Component
const Organogram: React.FC = () => {
  return (
    <div className="font-montserrat">
      <LeadersSection />
      <TeamSection />
    </div>
  );
};

export default Organogram;

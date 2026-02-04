"use client";

import gsap from "gsap";
import { useRef } from "react";

interface CrescentProps {
  color: string;
  maskId: string;
  className?: string;
  title?: string;
  text?: string;
  icon?: React.ReactNode;

  cutX?: number;
  cutY?: number;
  cutR?: number;
  cut2X?: number;
  cut2Y?: number;
  cut2R?: number; 
}

export default function Crescent({ color, maskId, className, title, text, icon, cutX, cutY, cutR, cut2X, cut2Y, cut2R }: CrescentProps) {

  const svgRef = useRef<SVGSVGElement>(null);

  const onEnter = () => {
    gsap.to(`#${maskId}-cut`,
      { duration: 0.5, attr: { cx: 360 }, ease: "power3.out" });
    gsap.to(svgRef.current, {
      scale: 1.1,
      y: -10,
      duration: 0.4,
      ease: "power3.out",
      zIndex: 1000,
    });
  };

  const onLeave = () => {
    gsap.to(`#${maskId}-cut`,
      { duration: 0.5, attr: { cx: cutX ?? 0 }, ease: "power3.out" });
    gsap.to(svgRef.current, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });
   }


  return (
    <svg
       ref={svgRef}
       onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={className}
      width="50%"
      height="350"
      viewBox="0 0 260 200"
    >
      <defs>
        <mask id={maskId}>
          <rect width="200%" height="120%" fill="white" />
          <circle id={`${maskId}-cut`} cx={cutX} cy={cutY} r={cutR} fill="black" />
        </mask>
      </defs>

      <g mask={`url(#${maskId})`}>
      <circle
        cx={cut2X ?? 110}
        cy={cut2Y ?? 100}
        r={cut2R ?? 100}
        fill={color}

      />
      <text x="40" y="90" fontSize="16" fontWeight="bold" fill="white">{title}</text>
      <text x="40" y="115" fontSize="12" fill="white">{text}</text>
      {icon && <g transform="translate(40, 50)">{icon}</g>}
      </g>
    </svg>
  );
}

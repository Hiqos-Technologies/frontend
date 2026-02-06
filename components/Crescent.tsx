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
      style: { zIndex: 10000 },
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
      style: { zIndex: 0 },
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

      <g mask={`url(#${maskId})`} >
      <circle
        cx={cut2X ?? 110}
        cy={cut2Y ?? 100}
        r={cut2R ?? 100}
        fill={color}

        />
        <foreignObject x="0" y="0"   width="220" height="200">
          <div
          className="flex h-full w-full flex-col gap-2 items-center justify-center text-center text-white"
          >

      <h3 className="text-sm font-bold tr">{title}</h3>
      <p className="text-[10px] opacity-90 max-w-[120px] font-dm-sans">{text}</p>
          {icon && <div >{icon}</div>}
          </div>
          </foreignObject>
      </g>
    </svg>
  );
}

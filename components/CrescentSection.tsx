"use client";

import { Binoculars, Crosshair, Goal } from "lucide-react";

import Crescent from "./Crescent";

export default function CrescentSection() {
  return (
    <div className="p-5 min-h-[110vh] z-0 relative bg-[#f5f5f5]">
      {/* ======================== MOBILE VIEW ======================== */}
      <div className="flex flex-col items-center gap-5 pt-10 justify-center min-[1000px]:hidden">
        <div className="h-5"></div>
        <Crescent
          color="#4f46e5"
          maskId="crescent-mask-1"
          className="w-full mx-auto h-full pl-10"
          title="Our Vision"
          text="Our primary purpose is to build a distinct brand known for delivering high quality customer services across Africa at affordable cost in the field of technology"
          icon={<Binoculars size={18} color="white" />}
          cutX={-20}
          cutY={205}
          cutR={100}
        />

        <Crescent
          color="#e80500"
          maskId="crescent-mask-2"
          className="w-full mx-auto h-full pl-10"
          title="Our Mission"
          text="Delivering high-impact, cost-effective solutions by aligning with client needs and empowering motivated teams to drive maximum ROI."
          icon={<Goal size={18} color="white" />}
          cutY={140}
          cutR={75}
          cutX={255}
        />
        <Crescent
          color="#132"
          maskId="crescent-mask-3"
          className="w-full mx-auto h-full pl-10"
          title="Core Values"
          text="Service | Loyalty | Integrity | Innovation | Teamwork | Value Creation | Expertise | Ethics | Safety"
          icon={<Crosshair size={18} color="white" />}
          cutY={-37}
          cutR={85}
          cutX={69}
        />
      </div>

      {/* ======================== DESKTOP VIEW ======================== */}
      {/*
        Approach A: max-width centered wrapper
        The crescents use absolute positioning, but instead of being
        positioned relative to the full viewport, they are now relative
        to a constrained, centered container. This keeps the crescent
        group visually centered at any screen size.
      */}
      <div className="hidden min-[1000px]:flex justify-center">
        <div className="max-w-[900px] w-full relative min-h-[750px]">
          <Crescent
            color="#4f46e5"
            maskId="crescent-mask-4"
            className="w-fit absolute top-10 left-[30%]"
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
            className="w-fit absolute left-[4.3%] top-59"
            title="Our Mission"
            text="Delivering high-impact, cost-effective solutions by aligning with client needs and empowering motivated teams to drive maximum ROI."
            icon={<Goal size={24} color="white" />}
            cutY={140}
            cutR={75}
            cutX={255}
          />
          <Crescent
            color="#1b2232"
            maskId="crescent-mask-6"
            className="w-fit absolute right-[10%] top-79"
            title="Core Values"
            text="Service | Loyalty | Integrity | Innovation | Teamwork | Value Creation | Expertise | Ethics | Safety"
            icon={<Crosshair size={24} color="white" />}
            cutY={-37}
            cutR={87}
            cutX={70}
          />
        </div>
      </div>
    </div>
  );
}

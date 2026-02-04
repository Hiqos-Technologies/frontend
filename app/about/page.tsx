import Crescent from "@/components/Crescent";
import React from "react";
import { Users } from "lucide-react";

export default function About() {
  return (
      <>
    
      <div className="my-25 h-screen relative border-2 bg-[#f5f5f5]">
        <span className="border-2 ">

            <Crescent
              color="#4f46e5"
            maskId="crescent-mask-1"
            className=" w-fit absolute top-3 left-114"
              title="About Us"
              text="We are a team of passionate developers building innovative solutions."
            icon={<Users size={24} color="white" />}
            cutX={180} cutY={285} cutR={120}
            
              />
              </span>
        <Crescent
              color="#e80500"
          maskId="crescent-mask-2"
          className=" w-fit absolute left-48 top-52"
              title="About Us"
              text="We are a team of passionate developers building innovative solutions."
          icon={<Users size={24} color="white" />}
          cutY={165}
          cutR={75}
          cutX={250}
        
        />
        <Crescent
              color="#1b2232"
          maskId="crescent-mask-3"
          className=" w-fit absolute right-100 top-88"
              title="About Us"
              text="We are a team of passionate developers building innovative solutions."
          icon={<Users size={24} color="white" />}
          cutY={-40}
          cutR={65}
          cutX={60}
        
            />
          </div>


      {/* <div className="py-15 flex relative">
        <svg className="absolute" width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <mask id="crescent-mask-1">
              <rect width="100%" height="100%" fill="white" />

              <circle cx="220" cy="100" r="70" fill="black" />
            </mask>
          </defs>

          <circle
            cx="110"
            cy="100"
            r="90"
            fill="#4f46e5"
            mask="url(#crescent-mask-1)"
          />
        </svg>
        <svg className="absolute" width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <mask id="crescent-mask-2">
              <rect width="100%" height="100%" fill="white" />

              <circle cx="220" cy="100" r="70" fill="black" />
            </mask>
          </defs>

          <circle
            cx="110"
            cy="100"
            r="90"
            fill="#e54646"
            mask="url(#crescent-mask-2)"
          />
        </svg>
        <svg className="absolute" width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <mask id="crescent-mask-3">
              <rect width="100%" height="100%" fill="white" />

              <circle cx="220" cy="100" r="70" fill="black" />
            </mask>
          </defs>

          <circle
            cx="110"
            cy="100"
            r="90"
            fill="#46e569"
            mask="url(#crescent-mask-3)"
          />
        </svg>
      </div> */}
    </>
  );
}

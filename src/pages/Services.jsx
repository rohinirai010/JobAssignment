import React from "react";
import serviceImg2 from "../assets/serviceImg2.jpeg";
import serviceImg3 from "../assets/serviceImg3.jpeg";
import Common from "../components/common";

const Services = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-[2rem] lg:gap-[4rem]" id="services">
      {/* Left half - Service images */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col px-[1.5rem] md:px-[2.5rem] gap-[1.5rem] py-[2rem] md:py-[3rem]">
        <div className="relative h-[18rem] md:h-[20rem] lg:h-1/2 flex-1">
          <img
            src={serviceImg2}
            alt="Model Logistics"
            className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem]"
          />
          <div className="absolute flex flex-col gap-[1rem] bottom-0 right-0 max-w-md p-4 md:p-6 bg-white rounded-tl-[1.5rem] md:rounded-tl-[2.5rem]">
            <h1 className="text-lg md:text-xl font-semibold text-[#1F3765]">
              Model Logistics
            </h1>
            <p className="text-[#878787] text-sm">
              Our design team collaborates with architects early to ensure
              project success, while our logistics team ensures smooth progress
              from start to finish.
            </p>
          </div>
        </div>

        <div className="relative h-[18rem] md:h-[20rem] lg:h-1/2 flex-1">
          <img
            src={serviceImg3}
            alt="Model Maintenance"
            className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem]"
          />
          <div className="absolute flex flex-col gap-[1rem] bottom-0 left-0 max-w-md p-4 md:p-6 bg-white rounded-tr-[1.5rem] md:rounded-tr-[2.5rem]">
            <h1 className="text-lg md:text-xl font-semibold text-[#1F3765]">
              Model Maintenance
            </h1>
            <p className="text-[#878787] text-sm">
              Mimar Models specializes in expert packing, moving, and handling
              of models, with routine maintenance available as per client needs.
            </p>
          </div>
        </div>
      </div>

      {/* Right half - Iconic Projects */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-end px-[1.5rem] lg:pr-[7rem]">
        <Common
          title="Iconic Projects"
          para="Mimar takes immense pride in building models for iconic projects across the Middle East. Partnering with leading realtors, we've crafted miniature forms of everything from industrial parks to religious sites. Being part of these historical creations is our most rewarding experience, inspiring us to create unique models for our prestigious clients."
          head="All Projects"
        />
      </div>
    </div>
  );
};

export default Services;

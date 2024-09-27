import React from "react";
import homeBannerImg from "../assets/homeBannerImg.jpeg";
import projectImg2 from "../assets/projectImg2.png";
import "../index.css";
import { GoArrowDownLeft } from "react-icons/go";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={homeBannerImg}
        alt="Home-Banner"
        className="w-full h-full object-cover"
      />

      {/* Main Heading */}
      <h1 className="absolute bottom-[14rem] md:bottom-[5rem] left-[3rem] md:left-[5rem] text-white text-6xl sm:text-7xl lg:text-8xl">
        {" "}
  
        Create. <br /> Design. <br /> Inspire.
      </h1>

      {/* Paragraph Section */}
      <div className="absolute w-full bottom-0 right-0 max-w-md p-6 bg-white  custom-rounded">
        <p className="text-[#000000] text-sm">
          Mimar Models is a pioneer in the Architectural Model Building
          industry. With 20 years of expertise in the field, we deliver
          high-quality models with the best standards across UAE. With offices
          in KSA and Egypt, our teams have the capability to deliver models
          across the globe.
        </p>
      </div>

      <div className="absolute top-[7rem] right-[4rem] hidden md:block">
        <a href="#projects" className="relative">
          <img
            src={projectImg2}
            alt="START PROJECT"
            className="animate-spin-slow"
          />
          <GoArrowDownLeft className="text-4xl text-[white] absolute top-[3.2rem] right-[3.5rem]" />
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;

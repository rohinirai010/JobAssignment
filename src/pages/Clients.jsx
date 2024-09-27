import React from "react";
import Common from "../components/common";
import qualityImg from "../assets/qualityImg.jpeg";
import clientImg1 from "../assets/clientImg1.png";
import clientImg2 from "../assets/clientImg2.png";
import clientImg3 from "../assets/clientImg3.png";
import clientImg4 from "../assets/clientImg4.png";
import clientImg5 from "../assets/clientImg5.png";
import clientImg6 from "../assets/clientImg6.png";
import clientImg7 from "../assets/clientImg7.png";
import clientImg8 from "../assets/clientImg8.png";
import clientImg9 from "../assets/clientImg9.png";

const Clients = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-[2rem] md:gap-[4rem] px-[1.5rem] md:px-[3rem] py-[2rem] md:py-[2.5rem]">
      
      {/* Left Section - Clients */}
      <div className="w-full lg:w-1/2 flex flex-col gap-[2rem] md:gap-[4rem] lg:pr-[2rem]" id="clients">
        <div>
          <Common
            title="Our Clients"
            para="Mimar Models has had the privilege to work with the biggest names in the industry, both in the Government and Private sectors. Our clients stand testimony to the quality service we provide day in and day out."
            head="Clientele"
          />
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full md:w-[28rem] justify-center items-center">
          <img src={clientImg1} alt="Client1" className="w-full h-auto object-contain"/>
          <img src={clientImg2} alt="Client2" className="w-full h-auto object-contain"/>
          <img src={clientImg3} alt="Client3" className="w-full h-auto object-contain"/>
          <img src={clientImg4} alt="Client4" className="w-full h-auto object-contain"/>
          <img src={clientImg5} alt="Client5" className="w-full h-auto object-contain"/>
          <img src={clientImg6} alt="Client6" className="w-full h-auto object-contain"/>
          <img src={clientImg7} alt="Client7" className="w-full h-auto object-contain"/>
          <img src={clientImg8} alt="Client8" className="w-full h-auto object-contain"/>
          <img src={clientImg9} alt="Client9" className="w-full h-auto object-contain"/>
        </div>
      </div>
      
      {/* Right Section - Image and Quality Text */}
      <div className="relative w-full lg:w-1/2 h-full">
        <img
          src={qualityImg}
          alt="Quality"
          className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem]"
        />
        
        {/* Text over Image */}
        <h1 className="absolute bottom-[2rem] md:bottom-[4rem] left-[2rem] md:left-[5rem] text-white text-4xl md:text-5xl lg:text-7xl">
          Excellence
        </h1>

        {/* Floating Card */}
        <div className="absolute flex flex-col gap-[1rem] top-0 right-0 max-w-sm p-4 md:p-6 bg-white shadow-lg rounded-bl-[1.5rem] md:rounded-bl-[2.5rem]">
          <h1 className="text-lg md:text-xl font-semibold text-[#1F3765]">
            Our Quality
          </h1>
          <p className="text-[#878787] text-sm md:text-base">
            Mimar's goal is to create buildings for you where you not only feel completely comfortable, but also feel right at home from the start.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;

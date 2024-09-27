import React from "react";
import Common from "../components/common";
import projectImg from "../assets/projectImg.jpeg";

const Projects = () => {
  return (
    <div className="" id="projects">
      <div className="relative w-full h-[20rem] md:h-[30rem] lg:h-screen p-[1rem] md:p-[2rem]">
        <img
          src={projectImg}
          alt="Home-Banner"
          className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem]"
        />

        <h1 className="absolute bottom-[2rem] md:bottom-[4rem] left-[2rem] md:left-[5rem] text-white text-4xl md:text-5xl lg:text-8xl">
          One Zabeel <br /> Tower
        </h1>

        <div className="absolute flex flex-col gap-[1rem] md:gap-[2rem] bottom-[1rem] md:bottom-[2rem] right-[1rem] p-4 md:p-6 bg-white rounded-tl-[1.5rem] md:rounded-tl-[2.5rem]">
          <div className="flex flex-row gap-[1rem] md:gap-[1.5rem]">
            <h1 className="text-sm md:text-base font-semibold text-[#141414]">
              MODEL SCALE <br />{" "}
              <span className="text-[#515050] text-xs md:text-sm"> 1:150 </span>
            </h1>
            <h1 className="text-sm md:text-base font-semibold text-[#141414]">
              BASE SIZE <br />{" "}
              <span className="text-[#515050] text-xs md:text-sm">
                280 CM X 200 CM X 110 CM
              </span>
            </h1>
          </div>
          <p className="text-[#515050] text-xs md:text-sm font-medium">
            PORTABLE MODELS
          </p>
        </div>

        <div className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem] rounded-full text-[black] bg-[#ffffff] hover:bg-[#1F3765] hover:text-[#ffffff] cursor-pointer">
          View
        </div>
      </div>
    </div>
  );
};

export default Projects;

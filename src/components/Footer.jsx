import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import footerLogo from "../assets/footerLogo.png";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#000000]">
      <div className="w-[100%] flex flex-col lg:flex-row px-[1.5rem] lg:px-[4rem] py-[2rem] gap-[3rem] lg:gap-0">
        <div className="w-full lg:w-[50%] flex flex-col gap-[3rem]">
          <div className="flex flex-row gap-[1rem] lg:gap-[5rem] items-start text-[white]">
            <h1 className="text-4xl lg:text-7xl font-semibold tracking-wider">
              Place an <br /> Enquiry
            </h1>
            <GoArrowUpRight className="text-5xl lg:text-6xl mt-[19px]" />
          </div>

          <div>
            <button className="px-[1.5rem] lg:px-[2.4rem] py-[0.4rem] bg-white hover:bg-[#1F3765] text-black hover:text-[white] rounded-md">
              LET'S TALK
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-[3rem] lg:gap-[8rem]">
            <div className="flex flex-col gap-[2rem]">
              <h1 className="text-[#888888] text-sm font-medium">CONTACT US</h1>
              <div className="flex flex-col gap-[1.5rem]">
                <div className="flex flex-row gap-[1rem] items-start text-[white]">
                  <GrLocation className="text-lg" />
                  <p className="text-sm">
                    P.O.Box 30195 <br /> Sharjah, United Arab <br /> Emirates
                  </p>
                </div>
                <div className="flex flex-row gap-[1rem] items-center text-[white]">
                  <AiOutlineMail className="text-lg" />
                  <p className="text-sm">mmodels@mimarmodelsuae.com</p>
                </div>
                <div className="flex flex-row gap-[1rem] items-center text-[white]">
                  <LuPhoneCall className="text-lg" />
                  <p className="text-sm">+971 6 532 9123</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h1 className="text-[#888888] text-sm font-medium">
                QUICK LINKS
              </h1>
              <ul className="flex flex-col gap-[0.3rem] text-sm text-[white]">
                <li className="hover:text-[#888888]">
                  <a href="#about">Home</a>
                </li>
                <li className="hover:text-[#888888]">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-[#888888]">
                  <a href="#service">Services</a>
                </li>
                <li className="hover:text-[#888888]">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-[#888888]">
                  <a href="#career">Career</a>
                </li>
                <li className="hover:text-[#888888]">
                  <a href="#projects">Media Center</a>
                </li>
                <li className="hover:text-[#888888]">
                  <a href="#clients">Clientele</a>
                </li>
                <li className="hover:text-[#888888]">
                  <a href="#projects">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] w-full lg:w-[50%] lg:pl-[2rem] mb-[6rem] lg:mb-0">
          <div className="flex flex-col gap-[1rem]">
            <img
              src={footerLogo}
              alt="Footer-Logo"
              className="w-[18rem] lg:w-[22rem] h-[6rem] lg:h-[8rem]"
            />
            <h1 className="text-[#888888] text-base lg:text-xl tracking-wider">
              ISO 9001 certified
            </h1>
          </div>

          <div className="flex flex-col gap-[1.5rem] lg:gap-[2rem]">
            <h1 className="text-[#888888] text-sm lg:text-base tracking-widest">
              JOIN TO GET LATEST NEWS!
            </h1>
            <div className="flex flex-col w-full lg:w-[80%] gap-[1rem] lg:gap-[1.2rem]">
              <input
                type="email"
                placeholder="Email Address"
                className="p-[0.8rem] bg-[black] border-[1px]"
              />
              <button className="p-[0.8rem] bg-white hover:bg-[#1F3765] text-black hover:text-[white]">
                SUBMIT
              </button>
            </div>
            <p className="text-[#888888] block lg:hidden text-sm pl-[1rem] lg:pl-[4rem] mt-[2rem] lg:mt-0">
              Copyright ©2024 Mimar Models | All Rights Reserved. Crafted by The
              Yellow Strawberry !
            </p>
          </div>
        </div>
      </div>

      <p className="text-[#888888] hidden lg:block text-sm pl-[1.5rem] lg:pl-[4rem] mt-[2rem] lg:mt-0">
        Copyright ©2024 Mimar Models | All Rights Reserved. Crafted by The
        Yellow Strawberry !
      </p>

      {/* Social Media Section */}
      <div className="absolute  bottom-0 right-0  max-w-md p-[1.5rem] lg:p-[2rem]  bg-white shadow-lg custom-rounded">
        <div className="flex flex-row gap-[1rem]">
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-[#141414] hover:bg-[#1F3765] rounded-full">
            <FaXTwitter className="text-[white]" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-[#141414] hover:bg-[#1F3765] rounded-full">
            <SiInstagram className="text-[white]" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-[#141414] hover:bg-[#1F3765] rounded-full">
            <BsLinkedin className="text-[white]" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-[#141414] hover:bg-[#1F3765] rounded-full">
            <FaFacebookSquare className="text-[white]" />
          </div>
          <div className="w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-[#141414] hover:bg-[#1F3765] rounded-full">
            <IoLogoYoutube className="text-[white]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

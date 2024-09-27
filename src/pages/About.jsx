import React from 'react'
import Common from '../components/common'
import AboutComponent from '../components/AboutComponent'
import { PiGitBranchDuotone, PiSelectionBackgroundThin } from 'react-icons/pi'
import serviceImg1 from "../assets/serviceImg1.jpeg"
import { MdOutlineWorkHistory } from 'react-icons/md'
import { GoProjectRoadmap } from 'react-icons/go'

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row w-screen h-auto lg:h-screen' id='about'>
      {/* Left side - About content */}
      <div className='w-full lg:w-1/2 flex items-center justify-center bg-white lg:px-0 py-[3rem] lg:py-0'>
        <div className='flex flex-col gap-[4rem] md:gap-[7rem] max-w-[80%]'>
          <div>
            <Common title="What we do" para="Mimar Models is a pioneer in the Architectural Model Building industry. With 20 years of expertise in the field, we deliver high quality models with the best standards across UAE. With offices in KSA and Egypt, our teams have the capability to deliver models across the globe." head="ABOUT"/>
          </div>
          <div className='grid grid-cols-2 gap-y-[2.5rem]'>
            <AboutComponent Icon={PiSelectionBackgroundThin} title="15K" Info="Total Area"/>
            <AboutComponent Icon={MdOutlineWorkHistory} title="180+" Info="Work Experience"/>
            <AboutComponent Icon={GoProjectRoadmap} title="5914" Info="Project Complete"/>
            <AboutComponent Icon={PiGitBranchDuotone} title="3" Info="Branches"/>
          </div>
        </div>
      </div>

      {/* Right side - Services image and content */}
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full p-[2rem]" id='services'>
        <img
          src={serviceImg1}
          alt="Home-Banner"
          className="w-full h-full object-cover rounded-[3rem]" 
        />

        <h1 className="absolute bottom-[5rem] left-[4rem] text-white text-4xl md:text-5xl lg:text-7xl">
          Services
        </h1>

        <div className="absolute flex flex-col gap-[1rem] top-[1.5rem] right-[1.5rem] max-w-md p-[1.5rem] md:p-[2rem] bg-white shadow-lg rounded-bl-[2rem] md:rounded-bl-[3rem]">
          <h1 className="text-lg md:text-xl font-semibold text-[#1F3765]">
            Model Making
          </h1>
          <p className="text-[#878787] text-sm">
            Our expert team crafts impressive architectural models with precise
            attention to size, scale, and detail, showcasing your project as a
            true spectacle.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

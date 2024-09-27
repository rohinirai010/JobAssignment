import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "../index.css";

const Navbar = () => {
  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-[1.5rem] w-full p-4 bg-white shadow-md rounded-2xl">
      {/* Logo and Hamburger Menu */}
      <div className="flex flex-row justify-between gap-[2rem] w-full md:w-auto items-center">
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[6rem] h-auto cursor-pointer"
          />
        </a>
        <div className="md:hidden flex items-center">
          {isMenuOpen ? (
            <AiOutlineClose
              className="text-[white] bg-[black] p-2 rounded-md cursor-pointer text-[1.8rem]"
              onClick={toggleMenu}
            />
          ) : (
            <RxHamburgerMenu
              className="text-[white] bg-[black] p-2 rounded-md cursor-pointer text-[1.8rem]"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Menu items - Conditional rendering for small screens */}
      <div
        className={`absolute md:static top-[4rem] right-0 left-0 bg-white md:bg-transparent rounded-lg md:flex md:flex-row md:items-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row font-semibold p-6 md:p-0 text-center md:text-left bg-white md:bg-transparent rounded-lg shadow-lg md:shadow-none">
          <li className="hover:text-[#1F3765] hover:bg-[#f0f0f0] text-[black] md:text-[black] px-4 py-2 rounded-md transition-colors duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#1F3765] hover:bg-[#f0f0f0] text-[black] md:text-[black] px-4 py-2 rounded-md transition-colors duration-300">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#1F3765] hover:bg-[#f0f0f0] text-[black] md:text-[black] px-4 py-2 rounded-md transition-colors duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-[#1F3765] hover:bg-[#f0f0f0] text-[black] md:text-[black] px-4 py-2 rounded-md transition-colors duration-300">
            <a href="#clients">Clientele</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

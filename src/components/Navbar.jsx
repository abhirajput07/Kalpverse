import React, { useState } from "react";
import logo from "../assets/kalverse.png";
import Hamburger from "hamburger-react";
import clsx from "clsx";
export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((open) => !open);
  };
  console.log(isOpenMenu);
  return (
    <>
      <div className="w-full flex justify-between items-center md:px-10  mr-4">
        <div className="flex items-center w-[60%] md:w-[20%]">
          <img src={logo} alt="w-full" />
        </div>
        <div className="flex justify-end w-[80%] p-2 ">
          <ul className="hidden gap-3 md:gap-5 mr-6 items-center text-xs lg:text-sm md:flex">
            <li>
              <a
                href="#"
                className="text-[#2D0694] border-b-2 border-[#2D0694]"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Curriculum</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <button className="px-3 py-2 hidden md:block text-white bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] rounded">
            Registration Form
          </button>
          <div className="md:hidden md:text-sm" onClick={toggleMenu}>
            <Hamburger className="ham" />
          </div>
        </div>
      </div>
      {isOpenMenu ? (
        <div className={clsx( "flex flex-col w-[100%] h-64 p-2 md:hidden relative bg-blue-700 transition-all") }>
          <ul className="mr-6 items-center text-xl lg:text-sm ml-10 absolute right-0 left-0 text-white  justify-center  ">
            <li className="cursor-pointer my-1">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer my-1">
              <a href="#">About us</a>
            </li>
            <li className="cursor-pointer my-1">
              <a href="#">Curriculum</a>
            </li>
            <li className="cursor-pointer my-1">
              <a href="#">Blog</a>
            </li>
            <li className="cursor-pointer my-1">
              <a href="#">Testimonial</a>
            </li>
            <li className="cursor-pointer my-1">
              <a href="#">Contact Us</a>
            </li>

            <button className="my-2 px-1 bg-white text-blue-700 rounded">
              Registration Form
            </button>
          </ul>
        </div>
      ) : null}
    </>
  );
}

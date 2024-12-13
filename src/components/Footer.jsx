import React from "react";
import logo from "../assets/logooo.png";
export default function Footer() {
  return (
    <>
      <div className="bg-black w-full capitalize text-white px-[7%] flex py-10 text-sm md:flex-row flex-col ">
        <div className="md:w-[30%] w-full mx-5">
          <img src={logo} alt="" className="w-44 mb-5" />
          <div>
            <p className="text-sm ">
              <span className="font-bold">kalpverse</span> India Pvt Ltd,
              <br />
              where we're revolutionizing technology. We're more than just an IT
              firm; we're creators of immersive realities using VR, AR and MR.
            </p>
          </div>
        </div>
        <div className="md:w-[20%] w-full mx-5 my-3 md:my-0">
          <ul className="leading-6 flex md:space-x-0 space-x-5 md:block">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>testimonial</li>
          </ul>
        </div>
        <div className="md:w-[20%] w-full mx-5 my-3 md:my-0">
          <ul className="leading-6 flex md:space-x-0 space-x-5 md:block">
            <li>aR/VR</li>
            <li>Industry trends</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="md:w-[20%] w-full mx-5 my-3 md:my-0">
          <ul className="leading-6 flex md:space-x-0 space-x-5 md:block">
            <li className="text-[16px] font-bold">Contact</li>
            <li>203-204 2nd floor, Janjeerwala</li>
            <li>Square, Indore (M.P.).</li>
            <li>+91-78801 31387</li>
          </ul>
        </div>
      </div>
      <div className="bg-black flex justify-center pb-5">
        <input type="email" placeholder="kalverse@gmail.com" className="w-80 px-2 outline-none mx-2 rounded-e-sm"/>
        <button type="submit" className=" text-white bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] px-2 rounded-sm">Send</button>
      </div>
    </>
  );
}

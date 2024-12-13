import React from "react";
import student from "../assets/clgstudent.png";
export default function Banner() {
  return (
    <>
      <div className="w-full bg-[#F6F4FC] h-auto flex justify-center items-center md:justify-between flex-col-reverse md:flex-row  md:pl-24 md:pr-10  gap-5 pb-12">
        <div className="flex justify-center capitalize items-center md:items-start flex-col w-full  md:w-[60%]">
          <p className="font-bold text-sm tracking-wide">The Epitome of Educational Evolution</p>
          <p className="text-5xl font-bold tracking-wide">KALPVERSE</p>
          <p className="text-center md:text-left w-[80%] my-3">our courses is rated excellent by over 2000 people</p>
          <div className="flex justify-center md:justify-start w-full text-base ">
          <div className="flex gap-3">
            <button className="px-3 py-1 text-white bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] rounded capitalize">
              webinar registration
            </button>
            <button className="px-3 py-1 text-white bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] rounded capitalize" >
              contact us
            </button>
            </div>
          </div>
        </div>
        <div>
          <img src={student} className="w-96" alt="" />
        </div>
      </div>
    </>
  );
}

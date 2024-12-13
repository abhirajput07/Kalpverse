import React from "react";

export default function Facility({ image, title, description }) {
  return (
    <>
      <div className="md:w-[26%] w-[70%] py-10 bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] flex flex-col justify-center items-center border-2 flex-wrap border-gray-500 px-4 rounded-lg text-white gap-2 my-4 ">
        <img src={image} alt="" className="w-28 " />
        <p className="font-bold text-lg text-center">{title}</p>
        <p className="text-xs text-center">{description}</p>
      </div>
    </>
  );
}

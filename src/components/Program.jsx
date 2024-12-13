import React from "react";


export default function Program({ image,p1, p2, p3, p4, p5, p6, p7, p8, b1, b2 }) {
  return (
    <>
      <div className="md:w-[30%] shadow-inner border-2 rounded-2xl p-2 ">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="flex gap-4 mt-1 text-xs mb-4">
          <p className="bg-[#E9EEED] text-[#32685C] rounded px-1">{p1}</p>
          <p className="bg-[#FFEDEE] text-[#FF636D]  rounded px-1">{p2}</p>
        </div>
        <p className="lg:text-lg md:text-sm text-[#5A38BA] font-bold  mb-4 capitalize">{p3}</p>
        <div className="flex justify-between text-sm mb-4">
          <p className="text-gray-600">{p4}</p>
          <p>
            <span className="text-red-500">{p5}</span> {p6}
          </p>
        </div>
        <hr />
        <div className="flex justify-between text-sm mb-2">
          <p>{p7}</p>
          <p className="text-[#32685C]">Price {p8} rs</p>
        </div>
        <div className="flex justify-between">
          <button className="  bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] text-white px-4 py-1 text-xs rounded-sm">
            {b1}
          </button>
          <button className=" bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] text-white px-4 py-1 text-xs rounded-sm">
            {b2}
          </button>
        </div>
      </div>
      {/* <div className="md:w-[30%] shadow-inner border-2 rounded-2xl p-2">
          <div>
            <img src={hand} alt="" />
          </div>
          <div className="flex gap-4 mt-1 text-xs mb-4">
            <p className="bg-[#E9EEED] text-[#32685C] rounded px-1">
              Intermidiate
            </p>
            <p className="bg-[#FFEDEE] text-[#FF636D] rounded px-1">Experts</p>
          </div>
          <p className="text-lg text-[#5A38BA] font-bold mb-4">
            Artificial intelligence and machine learning (AI/ML)
          </p>
          <div className="flex justify-between text-sm mb-4">
            <p className="text-gray-600">10 lessons</p>
            <p>
              <span className="text-red-500">EMI Starts</span> 499
            </p>
          </div>
          <hr />
          <div className="flex justify-between text-sm mb-2">
            <p>4.2</p>
            <p className="text-[#32685C]">Price 5000 rs</p>
          </div>
          <div className="flex justify-between">
            <button className="  bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] text-white] px-4 py-1 text-xs rounded-sm">
              Explore
            </button>
            <button className="  bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] text-white px-4 py-1 text-xs rounded-sm">
              Syllabus
            </button>
          </div>
        </div>
        <div className="md:w-[30%] shadow-inner border-2 rounded-2xl p-2">
          <div>
            <img src={hand} alt="" />
          </div>
          <div className="flex gap-4 mt-1 text-xs mb-4">
            <p className="bg-[#E9EEED] text-[#32685C] rounded px-1">
              Intermidiate
            </p>
            <p className="bg-[#FFEDEE] text-[#FF636D] rounded px-1">Experts</p>
          </div>
          <p className="text-lg text-[#5A38BA] font-bold mb-4">
            Artificial intelligence and machine learning (AI/ML)
          </p>
          <div className="flex justify-between text-sm mb-4">
            <p className="text-gray-600">10 lessons</p>
            <p>
              <span className="text-red-500">EMI Starts</span> 499
            </p>
          </div>
          <hr />
          <div className="flex justify-between text-sm mb-2">
            <p>4.2</p>
            <p className="text-[#32685C]">Price 5000 rs</p>
          </div>
          <div className="flex justify-between">
            <button className="  bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] text-white px-4 py-1 text-xs rounded-sm">
              Explore
            </button>
            <button className="  bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] text-white px-4 py-1 text-xs rounded-sm">
              Syllabus
            </button>
          </div>
        </div> */}
    </>
  );
}

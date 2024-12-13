import React from "react";
export default function CoreLearning({image,p1,p2}) {
  return (
    <>
      
        <div className="md:w-[26%] w-[100%] basis-auto py-5 bg-gradient-to-b from-[#5A38BA] to-[#9F49F4] flex flex-row justify-around items-center border-2 border-gray-500 rounded-lg text-white gap-4 md:flex-col text-center lg:flex-row capitalize my-4">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
        </div>
      
    </>
  );
}

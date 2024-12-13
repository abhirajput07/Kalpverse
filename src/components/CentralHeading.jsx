import React from "react";

export default function CentralHeading({title}) {
  return (
    <>
      <div className="w-full m-auto flex justify-center items-center">
        <div className="flex justify-center my-5">
          <p className="text-[#40455A] text-3xl font-bold text-center capitalize">
            {title}
          </p>
        </div>
      </div>
    </>
  );
}

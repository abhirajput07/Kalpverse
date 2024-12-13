import React from "react";
import hand from "../assets/handshake.png";
import logo1 from "../assets/logo1.png";
export default function handshake() {
  return (
    <>
      <div className="w-full px-[7%] ">
        <div className="flex md:justify-between justify-center md:items-start items-center md:flex-row flex-col">
          <div className="md:w-[40%] w-full mb-5">
            <img src={hand} alt="" className="w-full" />
          </div>
          <div className="md:w-[55%] flex flex-col gap-4 ">
            <p className="text-2xl font-bold capitalize md:text-start text-center">
              latest industry trends
            </p>
            <p className="text-xs">
              Despite its progress, virtual reality still faces several
              challenges, including issues of accessibility, motion sickness,
              and the need for more compelling content. However, with ongoing
              advancements in hardware, software, and user experience design,
              the future of VR looks promising. As technology continues to
              evolve, we can expect virtual reality to become an increasingly
              integral part of our lives, shaping the way we work, play, and
              interact with the world around us.
            </p>
            <div className="flex justify-between  md:w-full md:gap-4 gap-2">
              <div className="flex flex-row md:flex-col">
                <div className="flex md:gap-4 gap-2 md:justify-between md:flex-row flex-col ">
                  <img src={logo1} alt="" className="w-6 h-6 rounded-[50%]" />
                  <div className="w-30">
                    <p className="text-sm font-bold">82%</p>
                    <p className="text-xs">
                      lorem ipsum dolor sit amet consectetur adipisci
                    </p>
                  </div>
                </div>
                <div className="flex md:gap-4 gap-2 md:justify-between md:flex-row flex-col ">
                  <img src={logo1} alt="" className="w-6 h-6 rounded-[50%]" />
                  <div className="w-30">
                    <p className="text-sm font-bold">82%</p>
                    <p className="text-xs">
                      lorem ipsum dolor sit amet consectetur adipisci
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row md:flex-col ">
                <div className="flex md:gap-4 gap-2 md:justify-between md:flex-row flex-col ">
                  <img src={logo1} alt="" className="w-6 h-6 rounded-[50%]" />
                  <div className="w-30">
                    <p className="text-sm font-bold">82%</p>
                    <p className="text-xs">
                      lorem ipsum dolor sit amet consectetur adipisci
                    </p>
                  </div>
                </div>
                <div className="flex md:gap-4 gap-2 md:justify-between md:flex-row flex-col ">
                  <img src={logo1} alt="" className="w-6 h-6 rounded-[50%]" />
                  <div className="w-30">
                    <p className="text-sm font-bold">82%</p>
                    <p className="text-xs">
                      lorem ipsum dolor sit amet consectetur adipisci
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

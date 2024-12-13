import React from "react";
import Program from "./Program";
import girl from "../assets/girl.png";
import laptop from "../assets/laptop.png";
import hand from "../assets/hand.png";
import CentralHeading from "./CentralHeading";

export default function Courses() {
  return (
    <>
    <CentralHeading title="Skill enhancement program"/>
      <div className="w-full m-auto flex justify-between md:flex-row items-center flex-col gap-10 px-[7%] mb-10">
        <Program
          image={hand}
          p1="Intermidiate"
          p2="Experts"
          p3="Artificial intelligence and machine learning (AI/ML)"
          p4="10 lessons"
          p5="EMI Starts"
          p6="499"
          p7="4.2"
          p8="5000"
          b1="Explore"
          b2="Syllabus"
        />
        <Program
          image={laptop}
          p1="Intermidiate"
          p2="Experts"
          p3="mERN Development
Mongo DB, express,React"
          p4="10 lessons"
          p5="EMI Starts"
          p6="499"
          p7="4.2"
          p8="5000"
          b1="Explore"
          b2="Syllabus"
        />
        <Program
          image={girl}
          p1="Intermidiate"
          p2="Experts"
          p3="augmented  reality/ virtual reality
aR,VR"
          p4="10 lessons"
          p5="EMI Starts"
          p6="499"
          p7="4.2"
          p8="5000"
          b1="Explore"
          b2="Syllabus"
        />
      </div>
    </>
  );
}

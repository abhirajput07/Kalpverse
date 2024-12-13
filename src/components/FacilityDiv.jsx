import React from "react";
import Facility from "./Facility";
import certificate from "../assets/certificate.png";
import group from "../assets/group.png";
import course from "../assets/course.png";

export default function FacilityDiv() {
  return (
    <>
      <div className="w-full m-auto flex md:justify-between justify-center items-center my-4 px-[7%] flex-col md:flex-row ">
        <Facility
          image={certificate}
          title="Certificate Internship"
          description="Set yourself apart with a certified internship. Get the skills, confidence..."
        />
        <Facility
          image={group}
          title="Certificate Internship"
          description="Set yourself apart with a certified internship. Get the skills, confidence..."
        />
        <Facility
          image={course}
          title="Certificate Internship"
          description="Set yourself apart with a certified internship. Get the skills, confidence..."
        />
      </div>
    </>
  );
}

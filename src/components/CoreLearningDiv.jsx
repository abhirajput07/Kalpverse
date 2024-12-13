import React from 'react'
import CoreLearning from './CoreLearning'
import smalllogo from "../assets/smalllogo.png";
import CentralHeading from './CentralHeading';
export default function CoreLearningDiv() {
  return (
    <>
          <CentralHeading title="core learning features" />
        <div className="w-full m-auto flex md:justify-evenly justify-center items-center flex-wrap md:mb-16 mb-4 px-[7%] flex-col md:flex-row ">
        <CoreLearning image={smalllogo} p1="account & business" p2="263 courses"/>
        <CoreLearning image={smalllogo} p1="account & business" p2="263 courses"/>
        <CoreLearning image={smalllogo} p1="account & business" p2="263 courses"/>
        <CoreLearning image={smalllogo} p1="account & business" p2="263 courses"/>
        <CoreLearning image={smalllogo} p1="account & business" p2="263 courses"/>
        <CoreLearning image={smalllogo} p1="account & business" p2="263 courses"/>
        </div>
    </>
  )
}

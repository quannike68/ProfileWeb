import React from "react";
import ResumeCard from "./ResumeCard";
import { dataExperience, dataMyEducation } from "@/constant/constant";
const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className="text-3x1 sm:text-4xl font-bold text-white">
            My Work
            <span className="text-[#40ffaa]"> Experience</span>
          </h1>
          {dataExperience.map((item, index) => (
            <div className="mt-10" key={index}>
              <ResumeCard {...item} />
            </div>
          ))}
        </div>
        {/* EDUCATION PART */}
        <div>
          <h1 className="text-3x1 sm:text-4xl font-bold text-white">
            My
            <span className="text-[#40ffaa]"> Education</span>
          </h1>
          {dataMyEducation.map((item, index) => (
            <div className="mt-10" key={index}>
              <ResumeCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;

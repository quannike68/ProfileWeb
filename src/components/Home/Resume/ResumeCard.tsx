import React from "react";
import { typeResumeCardProps } from "@/constant/constant";
import Image from "next/image";
const ResumeCard = ({
  role,
  Icon,
  date,
  description,
  img,
}: typeResumeCardProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-[#40ffaa]/10 transition-all duration-300 p-4 sm:p-8  rounded-xl">
        <div className="relative sm:w-20 sm:h-20 w-10 h-10 bg-[#40ffaa]/40 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          {Icon && <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-gray-50 z-10" />}
          {img && <Image src={img} alt={role} fill className="object-cover" />}
        </div>

        <div className="flex-row">
          {date && (
            <h1 className="mb-2  sm:py-1.5 py-1 text-gray-600 w-fit sm:text-lg text-sm font-bold">
              {date}
            </h1>
          )}
          <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold">
            {role}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base pt-3">
            {description}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;

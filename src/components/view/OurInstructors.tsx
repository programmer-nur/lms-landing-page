import React from "react";
import azhri from "../../../public/assets/instructos/drnayek.jpg";
import Image from "next/image";
import { HiOutlineAcademicCap, HiOutlineBookOpen } from "react-icons/hi";
import { Instructors } from "@/constants/instructons";
import { IInstructor } from "@/types/common";
const OurInstructors = () => {
  return (
    <div className="py-8 bg-mainBg sm:py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-xl sm:text-4xl font-medium sm:font-semibold text-center">
            Our Instructors
          </h2>
          <div className="h-[2px] bg-main w-[150px]"></div>
        </div>

        <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-16">
          {Instructors.map((instructor: IInstructor) => (
            <div
              key={instructor.id}
              className="relative bg-white shadow-xl rounded-[10px] shadow-slate-200"
            >
              <div className="h-48 w-full">
                <Image
                  src={instructor.image}
                  alt="instructor"
                  className="w-full absolute h-48 -top-10 px-10 object-cover"
                />
              </div>
              <div className="p-4 pt-0 flex flex-col gap-3">
                <div>
                  <h2 className="text-lg transition duration-500 group-hover:text-main text-center font-medium text-softBlack ">
                    {instructor.name}
                  </h2>
                  <p className="text-main text-base text-center">
                    {instructor.designation}
                  </p>
                </div>
                <div className="flex text-sm justify-between items-center">
                  <div className="flex gap-2 justify-start items-center">
                    <HiOutlineBookOpen /> <p>Courses: {instructor.courses}</p>
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <HiOutlineAcademicCap />{" "}
                    <p>Students: {instructor.students}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurInstructors;

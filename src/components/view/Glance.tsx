import Image from "next/image";
import React from "react";
import student from "../../../public/assets/glance/students.svg";
import tutor from "../../../public/assets/glance/tutor.svg";
import course from "../../../public/assets/glance/course.svg";

const Glance = () => {
  return (
    <div className="py-8 sm:py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-xl sm:text-4xl font-medium sm:font-semibold text-center">
            Dawha at A Glance
          </h2>
          <div className="h-[2px] bg-main w-[150px]"></div>
        </div>

        <div>
          <div className="rounded-xl bg-gradient-to-b from-lightGradientFrom to-lightGradientTo p-5 shadow-[50px_50px_50px_50px_rgba(0,0,0,0.05)] sm:shadow-card-shadow md:p-[105px]">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              <div
                className="flex flex-col items-center justify-center gap-5 rounded-md  py-4  sm:gap-10
               sm:bg-none"
              >
                <div className="h-16 w-16 rounded-full shadow-[9px_18px_30px_0px_rgba(0,0,0,0.15)] p-1 sm:h-[50px] sm:w-[50px]">
                  <Image
                    src={student}
                    alt="client"
                    className="h-full w-full rounded-full"
                  />
                </div>
                <h2 className="text-center text-2xl font-medium text-[#404C5E]  sm:text-3xl">
                  <span className="font-bold">100+</span> <br /> Students
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 sm:gap-10 ">
                <div className="h-16 w-16 rounded-full shadow-[9px_18px_30px_0px_rgba(0,0,0,0.15)] p-1 sm:h-[50px] sm:w-[50px]">
                  <Image
                    src={tutor}
                    alt="client"
                    className="h-full w-full rounded-full"
                  />
                </div>
                <h2 className="text-center text-2xl font-medium text-[#404C5E] d sm:text-3xl">
                  <span className="font-bold">10+</span> <br /> Tutors
                </h2>
              </div>
              <div className=" flex flex-col items-center justify-center gap-5 rounded-md  py-4 sm:gap-10">
                <div className="h-16 w-16 rounded-full shadow-[9px_18px_30px_0px_rgba(0,0,0,0.15)]  p-1 sm:h-[50px] sm:w-[50px]">
                  <Image
                    src={course}
                    alt="client"
                    className="h-full w-full rounded-full"
                  />
                </div>
                <h2 className="text-center text-2xl font-medium text-[#404C5E] sm:text-3xl">
                  <span className="font-bold">25+</span> <br /> Courses
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glance;

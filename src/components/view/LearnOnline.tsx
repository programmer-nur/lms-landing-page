import Image from "next/image";
import React from "react";
import camera from "../../../public/assets/liveClass/camera.svg";
import mute from "../../../public/assets/liveClass/mute.svg";
import hd from "../../../public/assets/liveClass/hd.svg";
import liveCourse from "../../../public/assets/liveClass/livecourse.jpg";
const LearnOnline = () => {
  return (
    <div className="py-8 sm:py-20">
      <div className="mx-auto py-8 max-w-7xl flex flex-col md:flex-row  gap-8 sm:gap-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-1 justify-start items-start">
            <p className="text-lg text-main">Learn In Online</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-grayBlack">
              Live Online Session
            </h2>
          </div>
          <p className="max-w-lg">
            Explore our comprehensive syllabus, focusing on essential Quranic
            skills and Tajweed rules for precise recitation. Immerse yourself in
            Holy Quran recitation, Aqaid, Fiqh, Tareekh, Akhlaq, and related
            subjects through our cutting-edge online Quran learning Academy.
          </p>
          <div>
            <button className="flex items-center justify-start rounded-md bg-main px-4 py-2 text-base font-medium text-softWhite shadow hover:bg-gray-700 hover:text-white hover:transition md:text-lg">
              VIEW ALL
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-between items-center gap-5">
          <div className="flex justify-start flex-col gap-3 w-40">
            <div className="flex flex-col justify-center items-center">
              <div className="w-10 sm:w-16 h-10 sm:h-16">
                <Image src={camera} alt="camera" className="w-full h-full" />
              </div>
              <p className="ext-sm sm:text-base font-bold text-grayBlack">
                Recording
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="sm:w-14 w-8 h-8 sm:h-14">
                <Image src={mute} alt="camera" className="w-full h-full" />
              </div>
              <p className="ext-sm sm:text-base font-bold text-grayBlack">
                Noiseless
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-10 sm:w-16 h-10 sm:h-16">
                <Image src={hd} alt="camera" className="w-full h-full" />
              </div>
              <p className="text-sm sm:text-base font-bold text-grayBlack">
                4k Quality
              </p>
            </div>
          </div>
          <div className="w-full rounded-[10px] flex-col justify-center items-center h-full">
            <Image
              src={liveCourse}
              alt=""
              className="object-cover rounded-[10px] w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnOnline;

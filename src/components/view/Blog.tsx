import Image from "next/image";
import React from "react";
import { HiOutlineArrowNarrowRight, HiOutlineCalendar } from "react-icons/hi";
import { Badge } from "../ui/badge";
import { blogs } from "@/constants/blogs";
import { IBlog } from "@/types/common";
const Blog = () => {
  return (
    <div className="py-8 sm:py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-xl sm:text-4xl font-medium sm:font-semibold text-center">
            Our Blogs
          </h2>
          <div className="h-[2px] bg-main w-[150px]"></div>
        </div>

        <div className="grid mt-2 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 sm:gap-6">
          {blogs.map((blog: IBlog) => (
            <div
              key={blog.id}
              className="relative bg-white shadow-xl rounded-[10px] shadow-slate-200"
            >
              <div className="h-48 relative w-full">
                <Image
                  src={blog.image}
                  alt="instructor"
                  className="w-full rounded-t rounded-[10px] h-full object-cover"
                />
                <Badge className="absolute top-0 left-0">Category</Badge>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <h2 className="text-lg line-clamp-1 transition duration-500 group-hover:text-main font-medium text-softBlack ">
                  {blog.title}
                </h2>
                <div className="flex justify-normal items-center gap-2">
                  <HiOutlineCalendar />
                  <p>
                    {blog.date} by <span>{blog.author}</span>
                  </p>
                </div>
                <p className="line-clamp-3 text-sm text-grayBlack">
                  {blog.description}
                </p>

                <div className="flex justify-end  items-center">
                  <button className="py-2 flex justify-center group gap-2  transition duration-500 items-center px-4 border border-main text-black text-base rounded">
                    Read More
                    <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 transition duration-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

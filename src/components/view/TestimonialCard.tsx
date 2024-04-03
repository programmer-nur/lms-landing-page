import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TestimonialModal } from "./TestimonialModal";
import { ITestimonial } from "@/types/common";

const TestimonialCard = ({ testimonial }: { testimonial: ITestimonial }) => {
  const { name, designation, image, id, description } = testimonial || {};
  return (
    <div className="relative p-9 bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)] rounded-[12px]">
      {/* main content */}
      <div className="flex flex-col justify-start items-start gap-9">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="31"
            viewBox="0 0 34 31"
            fill="none"
          >
            <path
              d="M13.2813 30.3571H0V14.0615C0 9.681 0.885416 6.35179 2.65625 4.0739C4.60417 1.70841 7.88021 0.350444 12.4844 0V7.75356C10.8906 7.75356 9.5625 8.41064 8.5 9.7248C7.96875 10.4257 7.70313 11.7837 7.70313 13.7987V16.2956H13.2813V30.3571ZM34 30.3571H20.7188V14.0615C20.7188 9.681 21.5156 6.4832 23.1094 4.46816C25.2344 1.83983 28.599 0.350444 33.2031 0V7.75356C30.4583 7.75356 28.9089 9.11152 28.5547 11.8275C28.4662 12.1779 28.4219 12.835 28.4219 13.7987V16.2956H34V30.3571Z"
              fill="url(#paint0_linear_2009_592)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2009_592"
                x1="17"
                y1="0"
                x2="17"
                y2="30.3571"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D262FF" />
                <stop offset="1" stop-color="#7331FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-base text-grayBlack line-clamp-4">{description}</p>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-sm cursor-pointer underline text-main">
                  Read more
                </button>
              </DialogTrigger>
              <TestimonialModal id={id} />
            </Dialog>
          </div>
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div>
            <div className="w-[68px] h-[68px]">
              <Image
                src={image}
                alt="test"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-base text-grayBlack">{name}</h4>
            <p className="text-sm text-[rgba(64,76,94,0.75)]">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

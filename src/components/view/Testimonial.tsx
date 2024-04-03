import { testimonials } from "@/constants/testimonial";
import TestimonialCard from "./TestimonialCard";
import { ITestimonial } from "@/types/common";

const Testimonial = () => {
  return (
    <div className="py-8  sm:py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-xl sm:text-4xl font-medium sm:font-semibold text-center">
            What Our Students Say
          </h2>
          <div className="h-[2px] bg-main w-[150px]"></div>
        </div>

        <div className="grid sm:grid-cols-2 my-6 lg:grid-cols-3   gap-6">
          {testimonials.map((testimonial: ITestimonial) => (
            <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

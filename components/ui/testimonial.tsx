import React from "react";
import TestimonialSection from "./TestimonialSection";

const Testimonial = () => {
  return (
    <div className="max-w-330 mx-auto py-7 lg:py-15">
      <div className="flex flex-col items-center justify-center">
        <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
          Testimonial
        </button>
        <h3 className="text-[clamp(24px,4.5vw,48px)] text-center font-bold mt-5">
          Real Stories from Happy <br /> Pet Families
        </h3>
        <p className=" text-[clamp(14px,1.5vw,18px)] font-medium text-[#4C4C4C] text-center mt-5">
          Discover how pet parents are using our platform for seamless <br />{" "}
          adoption, trusted veterinary care, and quality
        </p>
      </div>
      <TestimonialSection />
    </div>
  );
};

export default Testimonial;

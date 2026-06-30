"use client";

import { testimonials } from "@/constants/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { animations } from "../animations/animation";

export default function TestimonialSection() {
  const [activeId, setActiveId] = useState(2);

  const activeTestimonial =
    testimonials.find((item) => item.id === activeId) || testimonials[0];

  return (
    <motion.section
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="max-w-330 mx-auto lg:flex gap-7.5 mt-10 overflow-hidden "
    >
      {/* Left Images */}
      <motion.div
        variants={animations.fadeRight}
        className="flex flex-col gap-5"
      >
        {testimonials.map((item) => {
          const active = item.id === activeId;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`
                relative lg:block hidden overflow-hidden rounded-[20px] transition-all duration-300
                ${
                  active
                    ? "ring-1 ring-[#F25027] h-50 w-75 shadow-[0_0_35px_rgba(255,138,101,.75)] scale-105"
                    : "opacity-80 hover:opacity-100 h-36 w-75 hover:scale-[1.02]"
                }
              `}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </button>
          );
        })}
      </motion.div>

      {/* Right Content */}
      <motion.div
        variants={animations.fadeLeft}
        className="relative rounded-2xl bg-[#F5F7FA] p-5 lg:p-10"
      >
        {/* <svg
          className="absolute z-50 right-6 top-4 h-24 w-24 text-gray-200"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8C6 10 4 14 4 19c0 5 3 9 8 9 4 0 7-3 7-7 0-5-4-7-8-7 0-3 2-5 5-6L10 8zm14 0c-4 2-6 6-6 11 0 5 3 9 8 9 4 0 7-3 7-7 0-5-4-7-8-7 0-3 2-5 5-6L24 8z" />
        </svg> */}

        <h2 className=" text-[clamp(24px,4vw,40px)] font-medium leading-snug">
          {activeTestimonial.review}
        </h2>

        <p className="mt-4 text-[clamp(16px,2vw,20px)]  text-[#4C4C4C]">
          Select from our tailored membership options designed for every player.
          Enjoy premium access to pristine fairways, effortless booking, and a
          welcoming community.
        </p>

        <div className="mt-8 lg:mt-24 flex flex-col lg:flex-row lg:items-end justify-between">
          <div>
            <h3 className="text-[clamp(20px,3vw,30px)] text-black ">
              {activeTestimonial.name}
            </h3>

            <p className="mt-2 text-[clamp(16px,2vw,20px)] text-[#7F7F7F]">
              {activeTestimonial.role}
            </p>
            <div className="mt-7 border border-dashed border-[#B3B3B3] w-full h-0.5 " />
          </div>

          <div className="flex text-[#FF8D28] text-2xl">★★★★★</div>
        </div>
      </motion.div>
    </motion.section>
  );
}

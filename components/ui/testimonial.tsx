import React from "react";
import TestimonialSection from "./TestimonialSection";
import * as motion from "framer-motion/client";
import { animations } from "../animations/animation";

const Testimonial = () => {
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-330 mx-auto py-7 lg:py-15"
    >
      <motion.div
        variants={animations.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center justify-center"
      >
        <motion.button
          variants={animations.fadeUp}
          className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white"
        >
          Testimonial
        </motion.button>
        <motion.h3
          variants={animations.fadeUp}
          className="text-[clamp(24px,4.5vw,48px)] text-center font-bold mt-5"
        >
          Real Stories from Happy <br /> Pet Families
        </motion.h3>
        <motion.p
          variants={animations.fadeUp}
          className=" text-[clamp(14px,1.5vw,18px)] font-medium text-[#4C4C4C] text-center mt-5"
        >
          Discover how pet parents are using our platform for seamless <br />{" "}
          adoption, trusted veterinary care, and quality
        </motion.p>
      </motion.div>
      <div>
        <TestimonialSection />
      </div>
    </motion.div>
  );
};

export default Testimonial;

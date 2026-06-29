import React from "react";
import PetServicesSection from "../shared/PetServicesSection";
import * as motion from "framer-motion/client";
import { animations } from "../animations/animation";

const ServiceSection = () => {
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="service"
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
          Service
        </motion.button>
        <motion.h3
          variants={animations.fadeUp}
          className="text-[clamp(24px,4.5vw,48px)] font-bold mt-4"
        >
          PetCare Servises for All Pets
        </motion.h3>
        <motion.p
          variants={animations.fadeUp}
          className=" text-[clamp(14px,1.5vw,18px)] font-medium text-[#4C4C4C] text-center mt-4"
        >
          We provide trusted, professional, and loving pet care services to keep
          every pet <br /> happy, healthy, safe, and full of joy every day.
        </motion.p>
      </motion.div>

      <div>
        <PetServicesSection />
      </div>
    </motion.div>
  );
};

export default ServiceSection;

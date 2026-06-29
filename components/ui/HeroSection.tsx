import { assets } from "@/assets";
import { IconArrowUpRight } from "@tabler/icons-react";
import * as motion from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { animations } from "../animations/animation";

const HeroSection = () => {
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-330 mx-auto relative overflow-hidden "
    >
      <motion.div variants={animations.fadeUp} className="mt-7 md:mt-15">
        <Image
          src={assets.hero_title}
          alt=""
          priority
          className="w-full  object-cover"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-dashed border-[#D7D7D7] mt-7 md:mt-10 pt-7 md:pt-10">
        <motion.p
          variants={animations.fadeRight}
          className="max-w-100 text-md leading-tight "
        >
          Empowering modern brands with premium digital marketing, creative
          strategy, and AI-driven growth solutions. premium digital marketing,
          creative strategy,
        </motion.p>
        <motion.div
          variants={animations.fadeLeft}
          className=" flex gap-3 items-center border border-[#F25027] bg-white rounded-xl px-3 py-1 mt-3 md:mt-0"
        >
          <button className=" text-[#F25027] text-md ">Get Started</button>
          <div className="flex items-center justify-center w-10 h-10 bg-[#F25027] rounded-xl ">
            <IconArrowUpRight size={20} className="text-white " />
          </div>
        </motion.div>
      </div>

      <motion.div variants={animations.fadeUp} className="lg:-mt-40">
        <Image
          src={assets.hero_img}
          alt="hero"
          priority
          className="w-full object-cover"
        />
      </motion.div>

      <div className="-mt-17">
        <Image
          src={assets.hero_bottom_img}
          alt=""
          priority
          className="w-full h-18 object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;

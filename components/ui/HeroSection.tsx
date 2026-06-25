import { assets } from "@/assets";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-330 mx-auto relative  ">
      <div className="mt-7 md:mt-15">
        <Image
          src={assets.hero_title}
          alt=""
          className="w-full  object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-dashed border-[#D7D7D7] mt-7 md:mt-10 pt-7 md:pt-10">
        <p className="max-w-100 text-md leading-tight ">
          Empowering modern brands with premium digital marketing, creative
          strategy, and AI-driven growth solutions. premium digital marketing,
          creative strategy,
        </p>
        <div className=" flex gap-3 items-center border border-[#F25027] bg-white rounded-xl px-3 py-1 mt-3 md:mt-0">
          <button className=" text-[#F25027] text-md ">Get Started</button>
          <div className="flex items-center justify-center w-10 h-10 bg-[#F25027] rounded-xl ">
            <IconArrowUpRight size={20} className="text-white " />
          </div>
        </div>
      </div>

      <div className="lg:-mt-40">
        <Image
          src={assets.hero_img}
          alt="hero"
          className="w-full object-cover"
        />
      </div>

      <div className="-mt-17">
        <Image
          src={assets.hero_bottom_img}
          alt=""
          className="w-full h-18 object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;

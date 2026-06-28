"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { petSlides } from "@/constants/petSlider";

export default function PetShowcaseSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % petSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full  overflow-hidden rounded-[20px]">
      <AnimatePresence>
        <motion.div className="absolute inset-0">
          <Image
            src={petSlides[current].image}
            alt=""
            fill
            priority
            className="object-cover"
          />

          <span className="absolute right-6 top-6 rounded-full bg-white px-5 py-2 text-sm font-medium">
            {petSlides[current].badge}
          </span>

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-[clamp(18px,2.5vw,26px)] font-bold leading-tight">
              {petSlides[current].title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/80">
              {petSlides[current].description}
            </p>

            <div className="mt-8 flex justify-center gap-3">
              {petSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

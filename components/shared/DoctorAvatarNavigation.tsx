"use client";

import Image from "next/image";
import { IconArrowNarrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

import { Doctor } from "@/types/doctor";

interface DoctorAvatarNavigationProps {
  doctors: Doctor[];
  activeDoctor: number;
  setActiveDoctor: (index: number) => void;
}

export default function DoctorAvatarNavigation({
  doctors,
  activeDoctor,
  setActiveDoctor,
}: DoctorAvatarNavigationProps) {
  const nextDoctor = () => {
    if (activeDoctor === doctors.length - 1) {
      setActiveDoctor(0);
      return;
    }

    setActiveDoctor(activeDoctor + 1);
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        {/* Appointment Button */}
        <button
          className="
          flex gap-2
          rounded-full
          bg-[#F25027]
          px-7
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
         cursor-pointer
          hover:bg-[#e14c1d]
          
        "
        >
          Make Appointment
          <span>
            <IconArrowUpRight />
          </span>
        </button>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-2.5 border border-[#F5F7FA] rounded-full bg-[#F5F7FA] p-2">
        <div className="flex items-center gap-1">
          {doctors.map((doctor, index) => (
            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ y: -4 }}
              key={doctor.id}
              onClick={() => setActiveDoctor(index)}
              className={`relative overflow-hidden rounded-full border-4 transition-all duration-300 ${
                activeDoctor === index
                  ? "z-20 border-[#F25027] "
                  : "z-10 border-none "
              } ${index !== 0 ? "" : ""}`}
            >
              <Image
                src={doctor.avatar}
                alt={doctor.name}
                width={60}
                height={60}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={nextDoctor}
          className="cursor-pointer  "
        >
          <IconArrowNarrowRight size={30} />
        </motion.button>
      </div>
    </div>
  );
}

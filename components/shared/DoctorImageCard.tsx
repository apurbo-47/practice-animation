"use client";

import Image from "next/image";
import { IconHeartHandshake } from "@tabler/icons-react";
import { Doctor } from "@/types/doctor";
import { motion } from "framer-motion";
import { animations } from "../animations/animation";

interface DoctorImageCardProps {
  doctor: Doctor;
}

export default function DoctorImageCard({ doctor }: DoctorImageCardProps) {
  return (
    <motion.section
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        variants={animations.fadeRight}
        className="relative overflow-hidden rounded-[20px] "
      >
        {/* Doctor Image */}
        <div className="relative aspect-[4/4.6] w-full overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-103"
          />
        </div>

        {/* Bottom Overlay Card */}
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,.12)]">
          <div className="flex items-center justify-between gap-4">
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF2EC] text-[#F15A29]">
                <IconHeartHandshake size={22} stroke={2} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1F1F1F]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-xs text-neutral-500">
                  {doctor.designation}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="text-xs text-neutral-500">Rating</p>

              <div className="mt-1 flex justify-end gap-0.5">
                {Array.from({ length: doctor.rating }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#F59E0B"
                    className="h-4 w-4"
                  >
                    <path d="M9.049.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.287 3.958c.3.922-.755 1.688-1.539 1.118L10 13.347l-3.354 2.435c-.784.57-1.838-.196-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.663 7.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049.927z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

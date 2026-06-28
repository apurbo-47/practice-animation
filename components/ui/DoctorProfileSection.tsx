"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { doctors } from "@/constants/doctors";
import DoctorImageCard from "../shared/DoctorImageCard";
import DoctorDetails from "../shared/DoctorDetails";
import { assets } from "@/assets";

export default function DoctorProfileSection() {
  const [activeDoctor, setActiveDoctor] = useState(0);

  const doctor = doctors[activeDoctor];

  return (
    <section
      className="relative py-7 px-5 lg:px-0 lg:py-15 bg-cover bg-center"
      style={{
        backgroundImage: `url('${assets.doctor_bg.src}')`,
      }}
    >
      <div className="max-w-330 mx-auto ">
        <div className="overflow-hidden rounded-[20px] bg-white p-4 lg:p-7.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={doctor.id}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="grid gap-10 lg:grid-cols-2 "
            >
              {/* Left Doctor Card */}
              <motion.div
                key={`image-${doctor.id}`}
                transition={{
                  duration: 0.45,
                }}
              >
                <DoctorImageCard doctor={doctor} />
              </motion.div>

              {/* Right Details */}
              <motion.div
                key={`details-${doctor.id}`}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                }}
              >
                <DoctorDetails
                  doctor={doctor}
                  doctors={doctors}
                  activeDoctor={activeDoctor}
                  setActiveDoctor={setActiveDoctor}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

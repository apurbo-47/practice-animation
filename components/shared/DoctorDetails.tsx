"use client";

import { Doctor } from "@/types/doctor";

import DoctorFeatureList from "./DoctorFeatureList";
import DoctorAvatarNavigation from "./DoctorAvatarNavigation";
import { IconBriefcase, IconPaw } from "@tabler/icons-react";

interface DoctorDetailsProps {
  doctor: Doctor;
  doctors: Doctor[];
  activeDoctor: number;
  setActiveDoctor: (index: number) => void;
}

export default function DoctorDetails({
  doctor,
  doctors,
  activeDoctor,
  setActiveDoctor,
}: DoctorDetailsProps) {
  return (
    <div className="flex h-full flex-col justify-between ">
      {/* Header */}
      <div>
        <h2 className="text-[clamp(24px,4.5vw,44px)] font-bold leading-tight">
          {doctor.title}
        </h2>

        <p className="mt-5 text-[clamp(14px,1.5vw,18px)] text-black/80">
          {doctor.description}
        </p>

        <div className="mt-7 flex  items-center gap-5">
          <div className="flex gap-2.5">
            <span>
              <IconBriefcase size={24} />
            </span>
            <p className="text-[#333333] text-lg">20+ Years</p>
          </div>
          <div className="flex gap-2.5">
            <span>
              <IconPaw size={24} />
            </span>
            <p className="text-[#333333] text-lg">5K+ Happy Pets Treated</p>
          </div>
        </div>

        <div className="mt-5 border-t border-[#E6E6E6]" />

        <div className="mt-5">
          <DoctorFeatureList features={doctor.features} />
        </div>
      </div>

      {/* Bottom Navigation (Part 3B) */}
      <div className=" pt-8">
        <DoctorAvatarNavigation
          doctors={doctors}
          activeDoctor={activeDoctor}
          setActiveDoctor={setActiveDoctor}
        />
      </div>
    </div>
  );
}

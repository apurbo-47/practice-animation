import React from "react";
import PetServicesSection from "../shared/PetServicesSection";

const ServiceSection = () => {
  return (
    <div id="service" className="max-w-330 mx-auto py-7 lg:py-15">
      <div className="flex flex-col items-center justify-center">
        <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
          Service
        </button>
        <h3 className="text-[clamp(24px,4.5vw,48px)] font-bold mt-4">
          PetCare Servises for All Pets
        </h3>
        <p className=" text-[clamp(14px,1.5vw,18px)] font-medium text-[#4C4C4C] text-center mt-4">
          We provide trusted, professional, and loving pet care services to keep
          every pet <br /> happy, healthy, safe, and full of joy every day.
        </p>
      </div>

      <div>
        <PetServicesSection />
      </div>
    </div>
  );
};

export default ServiceSection;

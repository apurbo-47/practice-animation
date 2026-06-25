import React from "react";
import user1 from "@/assets/images/user1.png";
import user2 from "@/assets/images/user2.jpg";
import Image from "next/image";

const AboutSection = () => {
  const avatars = [user1, user2, user1, user2];

  return (
    <div id="about" className="max-w-330 mx-auto py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 lg:gap-30 px-5 lg:px-0">
        <div className="">
          <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
            Who We Are
          </button>
          <div className="flex items-center mt-6 lg:mt-12.5">
            {avatars.map((avatar, index) => (
              <Image
                key={index}
                src={avatar}
                alt={`User ${index + 1}`}
                className="-ml-3 first:ml-0 h-12.5 w-12.5 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-[clamp(12px,1.5vw,16px)] font-medium text-[#4D4D4D] mt-2.5">
            Trusted by over
          </p>
          <div className="flex items-center gap-2.5 mt-4">
            <p className="text-[clamp(24px,4vw,40px)] font-bold">50K+</p>
            <span className="text-[clamp(12px,1.5ve,16px)] text-[#4D4D4D] font-medium ">
              Customer worldwide
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-0">
          <h1 className="text-[clamp(24px,4vw,44px)] text-black font-semibold leading-tight">
            At Pet Care, we keep your furry friends happy, healthy, and loved
            with trusted care and personalized services that bring comfort,
            safety, and joy to every pet with gentle attention and endless
            affection.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5"></div>
    </div>
  );
};

export default AboutSection;

"use client";

import Image from "next/image";
import { useState } from "react";
import { pets } from "@/constants/pets";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { assets } from "@/assets";

export default function PetAdoption() {
  const [active, setActive] = useState(0);

  const pet = pets[active];

  const next = () => {
    setActive((prev) => (prev + 1) % pets.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + pets.length) % pets.length);
  };

  return (
    <section
      id="adoption"
      className="relative py-7 px-5 lg:px-0 lg:py-15 bg-cover bg-center"
      style={{
        backgroundImage: `url('${assets.adoption_bg.src}')`,
      }}
    >
      <div className="relative z-10 max-w-330 mx-auto bg-white rounded-[20px] p-4 lg:p-5">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-5">
          {/* LEFT */}

          <div className="relative overflow-hidden rounded-[20px] h-full">
            <Image
              src={pet.image}
              fill
              alt=""
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 ">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-white text-[clamp(20px,3vw,30px)] font-bold">
                    {pet.name}
                  </h2>

                  <p className="text-white mt-2">
                    Age: {pet.age} &nbsp; Gender: {pet.gender}
                  </p>
                </div>

                <button className="text-white">
                  <IconArrowUpRight size={30} />
                </button>
              </div>

              <div className="flex  gap-3 mt-6">
                {pet.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-5 py-2 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col">
            <div className="flex justify-between">
              <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
                Adoption
              </button>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className=" w-11 h-11 cursor-pointer rounded-full bg-[#F4F4F4] hover:bg-[#F25027] hover:text-white flex items-center justify-center"
                >
                  <IconChevronLeft size={24} />
                </button>

                <button
                  onClick={next}
                  className="w-11 h-11 cursor-pointer rounded-full bg-[#F4F4F4] hover:bg-[#F25027] hover:text-white flex items-center justify-center"
                >
                  <IconChevronRight size={24} />
                </button>
              </div>
            </div>

            <h1 className="mt-5 text-[clamp(24px,4.5vw,46px)] font-semibold leading-tight">
              Cute Pets Waiting to Find Their Forever Loving Home
            </h1>

            <p className="max-w-lg mt-4 text-[clamp(14px,1.5vw,18px)] text-[#4C4C4C] leading-8">
              {pet.description}
            </p>

            <div className="w-full flex justify-between items-center gap-5 mt-10 ">
              {pets.slice(1).map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActive(index + 1)}
                  className={`w-full rounded-full py-2 border border-[#E6E6E6] transition
                  `}
                >
                  {item.breed}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-3.5">
              {pets.slice(1).map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setActive(index + 1)}
                  className="relative h-64 rounded-[20px] overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={item.image}
                    fill
                    alt=""
                    className={`object-cover transition duration-500

                    ${
                      active === index + 1
                        ? "scale-110"
                        : "group-hover:scale-105"
                    }
                    `}
                  />

                  {active === index + 1 && (
                    <div className="absolute inset-0 ring-4 ring-[#F25027] rounded-2xl"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

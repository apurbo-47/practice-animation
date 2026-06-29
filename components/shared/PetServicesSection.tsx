import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import pet1 from "@/assets/images/pet1.png";
import pet2 from "@/assets/images/pet2.png";
import pet3 from "@/assets/images/pet3.png";
import pet4 from "@/assets/images/pet4.png";
import pet5 from "@/assets/images/pet5.png";
import pet6 from "@/assets/images/pet6.png";
import pet7 from "@/assets/images/pet7.png";
import pet8 from "@/assets/images/pet8.png";
import * as motion from "framer-motion/client";
import { animations } from "../animations/animation";

const services = [
  {
    title: "Pet Grooming",
    image: pet1,
    active: true,
  },
  {
    title: "Veterinary Care",
    image: pet2,
    active: true,
  },
  {
    title: "Pet Training",
    image: pet3,
    active: true,
  },
  {
    title: "Pet Boarding",
    image: pet4,
    active: true,
  },
  {
    title: "Nutrition Care",
    image: pet5,
    active: true,
  },
  {
    title: "Pet Adoption",
    image: pet6,
    active: true,
  },
  {
    title: "Vaccination & Wellness",
    image: pet7,
    active: true,
  },
  {
    title: "Emergency Support",
    image: pet8,
    active: true,
  },
];

export default function PetServices() {
  return (
    <motion.section
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full mt-7 md:mt-15"
    >
      <div className=" px-4 lg:px-0">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative w-full h-90 overflow-hidden rounded-[20px] cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-white/14 via-black/10 to-transparen" />

              {/* Content */}
              <div className=" absolute bottom-3 left-3 right-3 flex items-end justify-between rounded-xl bg-black/25 px-3 py-2 backdrop-blur-md">
                <div className="">
                  <h3 className="max-w-28 text-xl font-semibold leading-tight text-white">
                    {service.title}
                  </h3>
                </div>

                <button
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                    service.active
                      ? "bg-white text-black group-hover:bg-[#FF6A3D] group-hover:text-white"
                      : ""
                  }`}
                >
                  <IconArrowUpRight size={20} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

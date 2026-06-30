"use client";

import Image from "next/image";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { faqs } from "@/constants/faqs";
import { assets } from "@/assets";
import { motion } from "framer-motion";
import { animations } from "../animations/animation";

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="lg:p-15 p-7 overflow-hidden"
    >
      <div className="max-w-330 mx-auto ">
        <div className="grid items-stretch gap-6 lg:gap-10 lg:grid-cols-[40%_60%] ">
          {/* Left */}
          <motion.div variants={animations.fadeRight} className="flex flex-col">
            <div>
              <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
                Faqs
              </button>

              <h2 className="mt-5 mb-5 text-[clamp(24px,4.5vw,48px)]  font-bold leading-tight ">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-[#F5F7FA] rounded-[20px]">
              <Image
                src={assets.faq}
                alt="Pet Adoption"
                className="w-full h-full  object-cover"
              />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={animations.fadeLeft} className="h-full">
            <div className="space-y-5">
              {faqs.map((faq) => {
                const isOpen = activeFaq === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-gray-200 bg-[#F5F7FA]"
                        : "border-gray-200 bg-[#F5F7FA]"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <h3 className="pr-5 text-xl font-medium text-black">
                        {faq.question}
                      </h3>

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "bg-black text-white" : "bg-black text-white"
                        }`}
                      >
                        {isOpen ? (
                          <IconMinus size={20} stroke={2.3} />
                        ) : (
                          <IconPlus size={20} stroke={2.3} />
                        )}
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-[#4C4C4C] leading-7">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

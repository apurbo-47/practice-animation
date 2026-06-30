"use client";

import { IconPhoneCall } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { animations } from "../animations/animation";

export default function ContactForm() {
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex h-full flex-col justify-center rounded-[28px] bg-white "
    >
      {/* Badge */}
      <motion.div variants={animations.fadeUp} className="mb-5">
        <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
          Contac Us
        </button>
      </motion.div>

      {/* Heading */}
      <motion.h3
        variants={animations.fadeUp}
        className="text-[clamp(24px,4.5vw,48px)] font-bold leading-tight"
      >
        Helping Pets Live Healthier, Happier Lives
      </motion.h3>

      <motion.p
        variants={animations.fadeUp}
        className=" text-[clamp(14px,1.5vw,18px)] font-medium text-[#4C4C4C]  mt-4"
      >
        We are here to support you and your pet every step of the way.
      </motion.p>
      {/* Form */}
      <motion.form
        variants={animations.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-7.5 space-y-5"
      >
        {/* Name */}
        <motion.div variants={animations.fadeUp}>
          <label className="mb-2 block text-[clamp(14px,1.5vw,18px)] font-medium text-black">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Don Norman"
            className="h-14 w-full rounded-xl border border-[#E6E6E6] bg-[#F5F7FA] px-5 outline-none transition-all focus:border-[#F25027] focus:bg-white"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={animations.fadeUp}>
          <label className="mb-2 block text-[clamp(14px,1.5vw,18px)] font-medium text-black">
            Your Email address
          </label>

          <input
            type="email"
            placeholder="donnorman@gmail.com"
            className="h-14 w-full rounded-xl border border-[#E6E6E6] bg-[#F5F7FA] px-5 outline-none transition-all focus:border-[#F25027] focus:bg-white"
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={animations.fadeUp}>
          <label className="mb-2 block text-[clamp(14px,1.5vw,18px)] font-medium text-black">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="My dog has been experiencing a loss of appetite and low energy for the past few days. I'm looking for advice on whether this requires a veterinary consultation and what steps I should take next."
            className="w-full resize-none rounded-xl border border-[#E6E6E6] bg-[#F5F7FA] p-5 outline-none transition-all focus:border-[#F25027] focus:bg-white"
          />
        </motion.div>

        {/* Button */}
        <motion.button
          variants={animations.fadeUp}
          type="submit"
          className="flex h-14 w-full items-center justify-center rounded-full bg-[#F25027] font-semibold text-white transition-all duration-300 hover:bg-[#e94b1d]"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Footer */}
      <motion.div
        variants={animations.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-2 text-xl font-medium"
      >
        <span className="">Not interested to submit the form?</span>

        <button
          type="button"
          className="flex items-center gap-2 text-xl font-medium text-[#F25027] transition hover:underline"
        >
          <IconPhoneCall size={18} stroke={2} />
          Book a call directly
        </button>
      </motion.div>
    </motion.div>
  );
}

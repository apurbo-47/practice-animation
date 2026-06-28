"use client";

import { IconPhoneCall } from "@tabler/icons-react";

export default function ContactForm() {
  return (
    <div className="flex h-full flex-col justify-center rounded-[28px] bg-white ">
      {/* Badge */}
      <div className="mb-5">
        <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
          Contac Us
        </button>
      </div>

      {/* Heading */}
      <h3 className="text-[clamp(24px,4.5vw,48px)] font-bold leading-tight">
        Helping Pets Live Healthier, Happier Lives
      </h3>

      <p className=" text-[clamp(14px,1.5vw,18px)] font-medium text-[#4C4C4C]  mt-4">
        We are here to support you and your pet every step of the way.
      </p>
      {/* Form */}
      <form className="mt-7.5 space-y-5">
        {/* Name */}
        <div>
          <label className="mb-2 block text-[clamp(14px,1.5vw,18px)] font-medium text-black">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Don Norman"
            className="h-14 w-full rounded-xl border border-[#E6E6E6] bg-[#F5F7FA] px-5 outline-none transition-all focus:border-[#F25027] focus:bg-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-[clamp(14px,1.5vw,18px)] font-medium text-black">
            Your Email address
          </label>

          <input
            type="email"
            placeholder="donnorman@gmail.com"
            className="h-14 w-full rounded-xl border border-[#E6E6E6] bg-[#F5F7FA] px-5 outline-none transition-all focus:border-[#F25027] focus:bg-white"
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-[clamp(14px,1.5vw,18px)] font-medium text-black">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="My dog has been experiencing a loss of appetite and low energy for the past few days. I'm looking for advice on whether this requires a veterinary consultation and what steps I should take next."
            className="w-full resize-none rounded-xl border border-[#E6E6E6] bg-[#F5F7FA] p-5 outline-none transition-all focus:border-[#F25027] focus:bg-white"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center rounded-full bg-[#F25027] font-semibold text-white transition-all duration-300 hover:bg-[#e94b1d]"
        >
          Send Message
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 flex flex-wrap items-center gap-2 text-xl font-medium">
        <span className="">Not interested to submit the form?</span>

        <button
          type="button"
          className="flex items-center gap-2 text-xl font-medium text-[#F25027] transition hover:underline"
        >
          <IconPhoneCall size={18} stroke={2} />
          Book a call directly
        </button>
      </div>
    </div>
  );
}

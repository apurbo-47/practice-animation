import { assets } from "@/assets";
import { animations } from "@/components/animations/animation";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandX,
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
} from "@tabler/icons-react";
import * as motion from "framer-motion/client";
import Image from "next/image";

export default function Footer() {
  const links = [
    "Home",
    "About us",
    "Services",
    "Adoption",
    "Pricing",
    "Contact Us",
  ];

  return (
    <motion.footer
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden bg-linear-to-b from-black via-[#140705] to-[#6A240F] text-white"
    >
      <div className="mx-auto max-w-330 px-5 py-7 lg:py-15 ">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 ">
          {/* Left */}
          <motion.div variants={animations.fadeUp}>
            <h3 className="max-w-md text-[clamp(20px,3vw,34px)] leading-tight font-medium">
              At PawCare, we connect pet parents with trusted care, expert
              support, and everything their pets need.
            </h3>

            <div className="mt-5 md:mt-8 flex items-center gap-3">
              <SocialIcon>
                <IconBrandFacebook size={18} />
              </SocialIcon>

              <SocialIcon>
                <IconBrandInstagram size={18} />
              </SocialIcon>

              <SocialIcon>
                <IconBrandTiktok size={18} />
              </SocialIcon>

              <SocialIcon>
                <IconBrandX size={18} />
              </SocialIcon>
            </div>
          </motion.div>

          {/* Center */}
          <motion.div variants={animations.fadeUp}>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white" />
              <h4 className="text-xl ">Quick Links</h4>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {links.map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm transition hover:bg-white/20"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={animations.fadeUp} className="">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white" />
              <h4 className="text-xl ">Contact</h4>
            </div>

            <div className="space-y-4 text-[clamp(14px,1.5vw,2opx)] text-white/90">
              <div className="flex items-center gap-3">
                <IconMail size={24} className="mt-0.5 shrink-0" />
                <span>hello@pawcare.com</span>
              </div>

              <div className="flex items-center gap-3">
                <IconPhone size={24} className="mt-0.5 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <IconMapPin size={24} className="mt-0.5 shrink-0" />
                <span>
                  123 Paw Street,
                  <br />
                  Green Valley, CA 90210
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Huge Brand */}
        <motion.div
          variants={animations.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 "
        >
          <Image src={assets.footer} alt="footer" className="object-cover" />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={animations.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-full border border-[#B3B3B3]  px-6 py-4 text-sm text-white/80 md:flex-row transition"
        >
          <p>© 2026 Pawcare. All rights reserved</p>

          <div className="flex items-center gap-6">
            <button className="hover:text-white">Privacy Policy</button>

            <button className="hover:text-white">Terms of Service</button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/10 transition hover:bg-white/20">
      {children}
    </button>
  );
}

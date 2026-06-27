"use client";

import Link from "next/link";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { assets } from "@/assets";
import { motion } from "framer-motion";
import { animations } from "@/components/animations/animation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#service" },
    { label: "Adoption", href: "/adoption" },
    { label: "Plan", href: "/plan" },
  ];

  return (
    <motion.header
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl"
    >
      <motion.div
        variants={animations.fadeDown}
        className="max-w-330 mx-auto px-5 xl:px-0 "
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <Image src={assets.logo} alt="logo" className="h-8 object-cover" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-[clamp(14px,2vw,16px)] font-medium text-[#4C4C4C] transition-colors duration-300 hover:text-[#F25027] hover:font-bold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#F25027] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-lg bg-[#F25027] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <IconX size={28} stroke={2} />
            ) : (
              <IconMenu2 size={28} stroke={2} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-125 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 transition-colors hover:text-black"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-fit rounded-lg bg-[#F25027] px-6 py-3 text-sm font-medium text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}

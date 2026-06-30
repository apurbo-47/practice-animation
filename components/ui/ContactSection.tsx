import { assets } from "@/assets";
import ContactForm from "../shared/ContactForm";
import PetShowcaseSlider from "../shared/PetShowcaseSlider";
import * as motion from "framer-motion/client";
import { animations } from "../animations/animation";

export default function ContactSection() {
  return (
    <motion.section
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="contact"
      className="relative py-7 px-5 lg:px-0 lg:py-15 bg-cover bg-center"
      style={{
        backgroundImage: `url('${assets.adoption_bg.src}')`,
      }}
    >
      <div className="max-w-330 mx-auto ">
        <div className="rounded-[20px] bg-white  shadow-2xl p-5 lg:p-7.5">
          <div className="grid gap-5 lg:gap-10 lg:grid-cols-2">
            <ContactForm />

            <PetShowcaseSlider />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

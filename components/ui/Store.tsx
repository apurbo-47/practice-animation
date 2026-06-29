import React from "react";
import ProductGrid from "../shared/ProductGrid";
import * as motion from "framer-motion/client";
import { animations } from "../animations/animation";

const Store = () => {
  return (
    <motion.div className="max-w-330 mx-auto py-7 lg:py-15 px-5 lg:px-0">
      <motion.div
        variants={animations.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl mx-auto"
      >
        <motion.h3
          variants={animations.fadeUp}
          className="text-[clamp(24px,4.5vw,48px)] font-bold text-center leading-tight"
        >
          Meet Our Team: Compassionate Experts Dedicated to Pets
        </motion.h3>
      </motion.div>
      <div>
        <ProductGrid />
      </div>
    </motion.div>
  );
};

export default Store;

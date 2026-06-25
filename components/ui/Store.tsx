import React from "react";
import ProductGrid from "../shared/ProductGrid";

const Store = () => {
  return (
    <div className="max-w-330 mx-auto py-7 lg:py-15 px-5 lg:px-0">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-[clamp(24px,4.5vw,48px)] font-bold text-center leading-tight">
          Meet Our Team: Compassionate Experts Dedicated to Pets
        </h3>
      </div>
      <div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default Store;

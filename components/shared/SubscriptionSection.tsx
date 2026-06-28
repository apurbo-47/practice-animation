"use client";

import { IconCheck } from "@tabler/icons-react";

const plans = [
  {
    name: "Elite Plan",
    price: "$49",
    duration: "/month",
    featured: false,
    features: [
      "Monthly health checkup",
      "Basic grooming session",
      "Nutrition Guidance",
      "Nutrition consultation",
      "Email Support",
    ],
  },
  {
    name: "Premium Plan",
    price: "$99",
    duration: "/month",
    featured: true,
    features: [
      "Weekly health checkups",
      "Premium grooming sessions",
      "Advanced nutrition plans",
      "24/7 phone support",
      "Emergency care included",
      "Training sessions",
      "Pet wellness reports",
    ],
  },
  {
    name: "Ultimate Care",
    price: "$149",
    duration: "/month",
    featured: false,
    features: [
      "Daily health monitoring",
      "Unlimited grooming",
      "Custom nutrition plans",
      "Priority 24/7 support",
      "Full emergency coverage",
      "Personal pet trainer",
      "Monthly wellness reports",
      "Home visit services",
    ],
  },
];

export default function SubscriptionSection() {
  return (
    <section id="plan" className="py-7 lg:py-15 ">
      <div className="max-w-330 mx-auto px-5 lg:px-0">
        <div className="text-center mb-12">
          <button className="border border-dashed border-white rounded-full bg-[#F25027] px-4 py-2 text-md text-white">
            Pricing
          </button>

          <h2 className="mt-5 text-[clamp(24px,4.5vw,48px)] leading-tight font-bold  max-w-3xl mx-auto ">
            Choose the Perfect Care Plan for Your Pet’s Health and Happiness
          </h2>

          <p className="mt-5 text-[clamp(14px,1.5vw,18px)] text-[#4C4C4C] max-w-xl mx-auto">
            Choose from flexible and affordable care plans designed to support
            your pet’he perfect option that fits both your pet’s unique
          </p>
        </div>

        <div className="grid gap-7.5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7.5 transition-all duration-300 border flex flex-col
              ${
                plan.featured
                  ? "bg-[#F25027] text-white border-[#E6E6E6] "
                  : "bg-[#F8F8F8] border-[#E6E6E6] "
              }`}
            >
              <h3 className="text-[clamp(20px,3vw,30px)] font-bold">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-end gap-2">
                <span
                  className={`text-[clamp(20px,4vw,40px)] font-bold ${
                    plan.featured ? "text-white" : "text-[#F25027]"
                  } `}
                >
                  {plan.price}
                </span>
                <span
                  className={`mb-2 text-[clamp(14px,1.5vw,18px)] ${
                    plan.featured ? "text-white" : "text-black/50"
                  }`}
                >
                  {plan.duration}
                </span>
              </div>
              <div className={`mt-8 text-[clamp(16px,2vw,20px)] font-semibold`}>
                What included ?
              </div>

              <ul className="mt-6 space-y-4 flex-1 ">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full
                      ${plan.featured ? " text-white" : " text-orange-500"}`}
                    >
                      <IconCheck size={20} />
                    </div>

                    <span
                      className={`text-base ${plan.featured ? "" : "text-[#4C4C4C]"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10  w-full rounded-full py-3  transition
                ${
                  plan.featured
                    ? "bg-white text-black hover:bg-orange-50 "
                    : "bg-[#F25027] text-white hover:bg-orange-600"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

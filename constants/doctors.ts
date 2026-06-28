import { Doctor } from "@/types/doctor";

import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.jpg";
import doctor3 from "@/assets/images/doctor3.jpg";
import doctor4 from "@/assets/images/doctor4.jpg";

import avatar1 from "@/assets/images/doctor1.png";
import avatar2 from "@/assets/images/doctor2.jpg";
import avatar3 from "@/assets/images/doctor3.jpg";
import avatar4 from "@/assets/images/doctor4.jpg";

export const doctors: Doctor[] = [
  {
    id: 1,

    name: "Dr. Sarah Wilson",

    designation: "Pet Surgery & Treatment Expert",

    image: doctor1,

    avatar: avatar1,

    rating: 5,

    title: "Inspiring a Lifelong Commitment to Their Care.",

    description:
      "Dr. Sarah Wilson has over 20 years of experience in pet surgery, preventive medicine and diagnostics. She believes every pet deserves compassionate and personalized care.",

    experience: "20+ Years",

    petsTreated: "5K+ Happy Pets Treated",

    features: [
      "Expertise in diagnostics and treatment planning",
      "Advanced surgical procedures",
      "Compassionate care for pets and owners",
      "Preventive healthcare solutions",
      "Animal surgery and internal medicine",
    ],
  },

  {
    id: 2,

    name: "Dr. Emily Taylor",

    designation: "Veterinary Internal Medicine",

    image: doctor2,

    avatar: avatar2,

    rating: 5,

    title: "Helping Pets Live Healthier and Happier Lives.",

    description:
      "Emily specializes in internal medicine and preventive healthcare. Her focus is building long-term wellness plans for every pet.",

    experience: "15+ Years",

    petsTreated: "4K+ Happy Pets Treated",

    features: [
      "Internal Medicine",
      "Preventive Care",
      "Vaccination Programs",
      "Senior Pet Care",
      "Nutrition Consultation",
    ],
  },

  {
    id: 3,

    name: "Dr. Michael Brown",

    designation: "Pet Dental Specialist",

    image: doctor3,

    avatar: avatar3,

    rating: 5,

    title: "Healthy Teeth Create Healthy Pets.",

    description:
      "Michael has performed thousands of successful dental surgeries and oral health treatments for pets of every age.",

    experience: "18+ Years",

    petsTreated: "6K+ Happy Pets Treated",

    features: [
      "Dental Surgery",
      "Oral Examination",
      "Dental Cleaning",
      "Tooth Extraction",
      "Emergency Dentistry",
    ],
  },

  {
    id: 4,

    name: "Dr. Olivia White",

    designation: "Emergency Veterinary Doctor",

    image: doctor4,

    avatar: avatar4,

    rating: 5,

    title: "Emergency Care When Every Second Matters.",

    description:
      "Olivia provides emergency and critical care with quick diagnosis and life-saving treatments for pets.",

    experience: "12+ Years",

    petsTreated: "3K+ Emergency Cases",

    features: [
      "Emergency Surgery",
      "ICU Care",
      "Trauma Treatment",
      "Critical Monitoring",
      "24/7 Emergency Support",
    ],
  },
];

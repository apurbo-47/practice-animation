import { StaticImageData } from "next/image";
import dog1 from "@/assets/images/dog1.png";
import dog2 from "@/assets/images/dog2.png";
import dog3 from "@/assets/images/dog3.png";
import dog4 from "@/assets/images/dog4.png";

export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: string;
  image: string | StaticImageData;
  description: string;
  tags: string[];
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Golden Retriever",
    breed: "Golden Retriever Puppy",
    age: "2 Years",
    gender: "Male",
    image: dog1,
    description:
      "Every adorable pet deserves a safe, caring, and loving family. Explore our lovable companions who are ready to fill your home with happiness, loyalty, and endless joy.",
    tags: ["Friendly", "Energetic", "Trained"],
  },
  {
    id: 2,
    name: "Siberian Husky",
    breed: "Siberian Husky",
    age: "1.5 Years",
    gender: "Female",
    image: dog2,
    description:
      "Every adorable pet deserves a safe, caring, and loving family. Loyal and active companion looking for a forever home.",
    tags: ["Playful", "Friendly", "Smart"],
  },
  {
    id: 3,
    name: "Golden Puppy",
    breed: "Golden Retriever Puppy",
    age: "6 Months",
    gender: "Male",
    image: dog3,
    description:
      "Every adorable pet deserves a safe, caring, and loving family. Cute little puppy ready for adoption.",
    tags: ["Cute", "Small", "Friendly"],
  },
  {
    id: 4,
    name: "Shiba Inu",
    breed: "Shiba Inu",
    age: "3 Years",
    gender: "Female",
    image: dog4,
    description:
      "Every adorable pet deserves a safe, caring, and loving family. Independent and loyal dog waiting for a loving family.",
    tags: ["Independent", "Loyal", "Clean"],
  },
];

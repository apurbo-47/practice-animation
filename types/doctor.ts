import { StaticImageData } from "next/image";

export interface Doctor {
  id: number;

  name: string;

  designation: string;

  image: string | StaticImageData;

  avatar: string | StaticImageData;

  title: string;

  description: string;

  experience: string;

  petsTreated: string;

  rating: number;

  features: string[];
}

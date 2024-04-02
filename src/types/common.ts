import { StaticImageData } from "next/image";

export interface IMenuItem {
  href: string;
  title: string;
}
export interface ICourse {
  id: string;
  title: string;
  price: string;
  rating: number;
  tag: string;
  image: string | StaticImageData;
}

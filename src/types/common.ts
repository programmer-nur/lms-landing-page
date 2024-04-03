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
export interface IInstructor {
  id: string;
  name: string;
  designation: string;
  image: string | StaticImageData;
  students: string;
  courses: string;
}

export interface IBlog {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  date: string;
  author: string;
}

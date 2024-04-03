import Courses from "@/components/view/Courses";
import Hero from "@/components/view/Hero";
import OurInstructors from "@/components/view/OurInstructors";
import OurSpecialty from "@/components/view/OurSpecialty";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurSpecialty />
      <Courses />
      <OurInstructors />
    </div>
  );
}

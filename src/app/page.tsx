import Blog from "@/components/view/Blog";
import Courses from "@/components/view/Courses";
import Glance from "@/components/view/Glance";
import Hero from "@/components/view/Hero";
import LearnOnline from "@/components/view/LearnOnline";
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
      <LearnOnline />
      <Glance />
      <Blog />
    </div>
  );
}

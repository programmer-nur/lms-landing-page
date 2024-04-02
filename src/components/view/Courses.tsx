import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import hadis from "../.././../public//assets//courses/six.jpg";
import Image from "next/image";
import { Star, StarIcon } from "lucide-react";
import { courses } from "@/constants/courses";
import { ICourse } from "@/types/common";
import Link from "next/link";
const Courses = () => {
  return (
    <div className="py-8 sm:py-20">
      <div className="mx-auto py-8 max-w-7xl flex flex-col gap-6 sm:gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-xl sm:text-4xl font-medium sm:font-semibold text-center">
            Our Courses
          </h2>
          <p className="h-[2px] bg-main w-[150px]"></p>
        </div>
        <Tabs defaultValue="hadis" className="py-2">
          <TabsList className="grid justify-center h-13 items-center w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <TabsTrigger className="text-grayBlack h-12" value="hadis">
              Hadis
            </TabsTrigger>
            <TabsTrigger className="text-grayBlack h-12" value="sura">
              Surah Courses
            </TabsTrigger>
            <TabsTrigger className="text-grayBlack h-12" value="history">
              Islamic History
            </TabsTrigger>
            <TabsTrigger className="text-grayBlack h-12" value="quran">
              Quran Tafsir
            </TabsTrigger>
            <TabsTrigger className="text-grayBlack h-12" value="dua">
              Dua Courses
            </TabsTrigger>
          </TabsList>
          <div className="grid mt-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {courses.map((course: ICourse) => (
              <TabsContent key={course.id} value={course.tag}>
                <Card className="group h-full">
                  <CardHeader className="p-1 h-44 overflow-hidden rounded-[10px]">
                    <Image
                      src={course.image}
                      alt=""
                      className="w-full rounded-[10px] hover:scale-110 transition duration-500 h-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="px-3 py-4  space-y-2">
                    <div className="flex justify-center items-center flex-col gap-3">
                      <Link
                        href={"#"}
                        className="text-lg transition duration-500 group-hover:text-main text-center font-medium text-softBlack line-clamp-2"
                      >
                        {course.title}
                      </Link>

                      <p className="text-base">
                        <span className="text-main">Price:</span> $
                        {course.price}
                      </p>
                      <div className="flex items-center gap-1">
                        <StarIcon size={18} className="text-yellow-400" />
                        <StarIcon size={18} className="text-yellow-400" />
                        <StarIcon size={18} className="text-yellow-400" />
                        <StarIcon size={18} className="text-yellow-400" />
                        <StarIcon size={18} className="text-yellow-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;

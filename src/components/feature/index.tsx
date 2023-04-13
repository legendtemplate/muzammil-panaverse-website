import Image from "next/image";
export default function index() {
  return (
    <div className="bg-white pb-10">
      <h2 className="font-semibold text-center py-10 text-3xl text-black">
        The Program in a<span className="text-red-400"> Nutshell</span>
      </h2>
      <div className="container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-10/12">
          <h1 className="text-black font-bold text-3xl py-6 ">Our Goals</h1>
          <p className="text-gray-600 font-medium text-base leading-normal">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first two quarters are shared by
            all specialties and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a fifteen-month-long hybrid program that includes both
            onsite and online classes and is divided into five quarters of 13
            weeks each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </p>
        </div>
        <div>
          <Image src="/hero/featur.png" alt="" 
          width="500" 
          height="500" 
          />
        </div>
      </div>
    </div>
  );
}

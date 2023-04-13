import Image from "next/image";
export default function index() {
  return (
    <div className="bg-white ">
      <h2 className="font-semibold text-center py-20 text-3xl text-black">
        <span className="text-red-400">Teach Latest Technology</span>
      </h2>
      <div className="container mx-auto lg:px-40 sm:px-10 px-5 pt-8 pb-16 grid lg:grid-cols-5 gap-y-5 md:grid-cols-3 grid-cols-2">
        <div className="bg-gray-100 transition-all hover:shadow-xl h-28 w-28 flex justify-center items-center">
          <Image
            src="/skill/react.png"
            alt=""
            height="70"
            width="70"
            className="flex justify-center items-center"
          />
        </div>
        <div className="bg-gray-100 transition-all hover:shadow-xl h-28 w-28 flex justify-center items-center">
          <Image
            src="/skill/nextjs.png"
            alt=""
            height="90"
            width="90"
            className="flex justify-center items-center"
          />
        </div>
        <div className="bg-gray-100 transition-all hover:shadow-xl h-28 w-28 flex justify-center items-center">
          <Image
            src="/skill/chakura.png"
            alt=""
            height="70"
            width="70"
            className="flex justify-center items-center"
          />
        </div>
        <div className="bg-gray-100 transition-all hover:shadow-xl h-28 w-28 flex justify-center items-center">
          <Image
            src="/skill/tailwind.png"
            alt=""
            height="70"
            width="70"
            className="flex justify-center items-center"
          />
        </div>
        <div className="bg-gray-100 transition-all hover:shadow-xl h-28 w-28 flex justify-center items-center">
          <Image
            src="/skill/framer.png"
            alt=""
            height="70"
            width="70"
            className="flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
}

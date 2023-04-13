import Image from "next/image";
import { FaConnectdevelop, FaBezierCurve, FaPenNib } from "react-icons/fa";
import { FcBullish } from "react-icons/fc";

export default function index() {
  return (
    <div className="bg-white ">
      <h2 className="font-semibold text-center py-20 text-3xl text-black">
        What can you <span className="text-red-400">do it?</span>
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto px-3 pt-6 pb-12">
        <div className="flex items-center flex-col justify-center">
          <div className="icon h-16 w-16 bg-cyan-500 rounded-lg text-4xl flex justify-center items-center">
            <FaConnectdevelop />
          </div>
          <div className="desc text-center">
            <h3 className="my-4 text-black font-bold text-lg">Creativity</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut
              voluptatum perspiciatis est atque commodi error reiciendis.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="icon h-16 w-16 bg-red-500 rounded-lg text-4xl flex justify-center items-center">
            <FaBezierCurve />
          </div>
          <div className="desc text-center">
            <h3 className="my-4 text-black font-bold text-lg">Design</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut
              voluptatum perspiciatis est atque commodi error reiciendis.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="icon h-16 w-16 bg-blue-500 rounded-lg text-4xl flex justify-center items-center">
            <FaPenNib />
          </div>
          <div className="desc text-center">
            <h3 className="my-4 text-black font-bold text-lg">Development</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut
              voluptatum perspiciatis est atque commodi error reiciendis.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="icon h-16 w-16 bg-yellow-500 rounded-lg text-4xl flex justify-center items-center">
            <FaConnectdevelop />
          </div>
          <div className="desc text-center">
            <h3 className="my-4 text-black font-bold text-lg">Quality</h3>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aut
              voluptatum perspiciatis est atque commodi error reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

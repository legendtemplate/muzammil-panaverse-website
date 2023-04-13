import Image from "next/image";
import { FaSearch, FaPhone } from "react-icons/fa";

export default function Nav() {
  return (
    <>
      <div className="hero">
        <div className="container mx-auto px-3 py-28 flex md:justify-center justify-start items-center gap-4 ">
          <div className=" lg:w-3/6 xs:w-10/12 w-full ">
            <div className="tag bg-cyan-50 text-red-400 rounded-3xl xs:w-80 w-64 p-2">
              <span className="bg-red-400 text-white px-2 py-1 rounded-3xl mx-2">
                New
              </span>{" "}
              Welcome to panaverse
            </div>
            <h2 className="font-bold sm:text-4xl text-2xl capitalize text-gray-900 leading-normal">
              We help you grow <span className="ts">your business </span> faster
            </h2>
            <p className="font-normal text-base leading-normal mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsam accusantium saepe aperiam dolor laborum eos totam nesciunt.
            </p>
            <div className="my-8">
              <a
                href=""
                className="lg:mr-8 md:mr-6 xs:mr-4 mr-2 bg-red-400 text-white hover:bg-white hover:text-red-400 hover:outline-2 hover:outline outline outline-2 outline-red-400 hover:outline-red-400 lg:px-8 md:px-6 xs:px-5 px-3 md:py-3 xs:py-2 py-1 transition-all font-normal text-lg"
              >
               Explore Course
              </a>
              <a
                href=""
                className="lg:mr-8 md:mr-6 xs:mr-4 mr-2 text-red-400 bg-white hover:bg-red-400 hover:text-white hover:outline-2 hover:outline outline outline-2 outline-red-400 hover:outline-red-400 lg:px-8 md:px-6 xs:px-5 px-3 md:py-3 xs:py-2 py-1  transition-all font-normal text-lg"
              >
                Apply
              </a>
            </div>
            <div>
                <h4 className=" text-gray-400 font-normal text-lg">Our Partners</h4>
                <div className="grid grid-cols-3 gap-2 my-1">
                    <Image src="/hero/panacloud.png" alt="" height="80" width="80" className="pt-16" />
                    <Image src="/hero/saylan.png" alt="" height="120" width="120" className="pt-4" />
                    <Image src="/hero/piaic.png" alt="" height="80" width="80" />
                </div>
              {/* <ul>
                <li>
                  <a href="" className="flex items-center text-gray-600">
                    <span className="mr-2 text-red-400 ">
                      <FaPhone />
                    </span>{" "}
                    314 4878266
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className=" lg:w-3/6 md:w-4/12"></div>
        </div>
      </div>
    </>
  );
}

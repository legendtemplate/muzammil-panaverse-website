import Image from "next/image";
import Social from "../social";
import { FaMapMarked, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

export default function index() {
  return (
    <>
      <footer className="bg-white relative">
        <div className=" pt-5 pb-5 text-black bg-gray-50">
          <div className="container mx-auto px-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-7">
            <div className="flex items-center">
              <FaMapMarked className="text-red-400 text-2xl" />
              <div className="cta-text flex flex-col ml-4 ">
                <h4 className="text-xl font-bold">Find us</h4>
                <span className="tetx-gray-500">
                  1010 Avenue, sw 54321, chandigarh
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-red-400 text-2xl" />
              <div className="cta-text flex flex-col ml-4 ">
                <h4 className="text-xl font-bold">Call us</h4>
                <span className="tetx-gray-500">01 23 456789</span>
              </div>
            </div>
            <div className="flex items-center">
              <FaMailBulk className="text-red-400 text-2xl" />
              <div className="cta-text flex flex-col ml-4 ">
                <h4 className="text-xl font-bold">Mail us</h4>
                <span className="tetx-gray-500">mail@info.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3">
          <div className="footer pt-5 pb-5">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-gray-700">
              <div className="footer-widget">
                <div className="footer-logo mb-7">
                  <a href="index.html">
                    <Image
                      src="/panaverse.webp"
                      height="120"
                      width="120"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p className="mb-7 text-sm text-gray-700 leading-7">
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="flex justify-start items-start">
                  <Social />
                </div>
              </div>
              <div className="footer-widget">
                <h3 className="text-red-400 font-semibold mb-8 relative text-xl fh">
                  Useful Links
                </h3>
                <ul className="flex flex-col ">
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">Home</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">about</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">services</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">portfolio</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget">
                <h3 className="text-red-400 font-semibold mb-8 relative text-xl fh">
                  Useful Links
                </h3>
                <ul className="flex flex-col ">
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">Home</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">about</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">services</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">portfolio</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget">
                <h3 className="text-red-400 font-semibold mb-8 relative text-xl fh">
                  Useful Links
                </h3>
                <ul className="flex flex-col ">
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">Home</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">about</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">services</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">portfolio</a>
                  </li>
                  <li className="mb-3 capitalize text-gray-600">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-6">
          <div className="container grid md:grid-cols-2 grid-cols-1 mx-auto px-3">
            <div className="md:text-left text-center m-0 text-base text-black">
              <p>
                Copyright &copy; 2018, All Right Reserved{" "}
                <a
                  href="https://codepen.io/anupkumar92/"
                  className="text-red-400"
                >
                  Anup
                </a>
              </p>
            </div>
            <div className="block text-right">
              <ul className="md:flex hidden items-center">
                <li>
                  <a href="#" className="mr-4 text-black">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 text-black">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 text-black">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 text-black">
                    Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

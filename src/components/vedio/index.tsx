import Image from "next/image";

export default function index() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-3 grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <div className="flex mb-6">
              <Image
                src="/blog.jpg"
                alt=""
                height="200"
                width="200"
                className="rounded-2xl"
              />
              <div className="ml-5 text-black">
                <div className="flex">
                  <span className="text-gray-500">Muzammil</span>
                </div>
                <h4 className="font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque, doloribus.
                </h4>
              </div>
            </div>
            <div className="flex mb-6">
              <Image
                src="/blog.jpg"
                alt=""
                height="200"
                width="200"
                className="rounded-2xl"
              />
              <div className="ml-5 text-black">
                <div className="flex">
                  <span className="text-gray-500">Muzammil</span>
                </div>
                <h4 className="font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque, doloribus.
                </h4>
              </div>
            </div>
            <div className="flex mb-6">
              <Image
                src="/blog.jpg"
                alt=""
                height="200"
                width="200"
                className="rounded-2xl"
              />
              <div className="ml-5 text-black">
                <div className="flex">
                  <span className="text-gray-500">Muzammil</span>
                </div>
                <h4 className="font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque, doloribus.
                </h4>
              </div>
            </div>
          </div>
          <div>
          <div className="flex flex-col mb-6">
              <Image
                src="/blog.jpg"
                alt=""
                height="100"
                width="100"
                className="rounded-2xl w-full h-68"
              />
              <div className="mt-3 text-black">
                <div className="flex">
                  <span className="text-gray-500">Muzammil</span>
                </div>
                <h4 className="font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cumque, doloribus.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

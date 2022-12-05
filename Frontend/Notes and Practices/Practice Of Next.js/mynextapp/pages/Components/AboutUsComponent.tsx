import React from "react";
import AboutUs from "../../images/About Us/about us.webp";
import DollarFile from "../../images/About Us/dollar-file.webp";
import Image from "next/image";

const AboutUsComponent = () => {
  return (
    <section className="mx-auto mt-28 lg:px-24">
      <div className="flex flex-wrap">
        <div className=" lg:my-12 lg:w-2/3 sm:my-10">
          <h3 className="font-semibold my-3 italic text-2xl">
            INTRODUCTION ABOUT US
          </h3>
          <h1 className="font-bold my-2 italic text-2xl">
            <span className="text-yellow-800">Book</span> an affordable flights
            and fantastic holiday with Zoki
          </h1>
          <div className="flex flex-wrap">
            <div className=" lg:w-2/3 sm:w-1/2">
              <h6 className="font-semibold italic">BEST PRICE GUARANTEED</h6>
              <p>
                anything or any content about flights can be written in this
                paragraph as i did'nt wanted to write something dummy here so i
                just wrote this as an explanation
              </p>
            </div>
            <div className="lg:w-1/3 sm:w-1/2">
              <Image priority src={DollarFile} alt="about us" />
            </div>
          </div>
          <button
            className="
                font-normal bg-black hover:bg-black text-yellow-200 rounded text-sm my-2 py-2 px-4 w-1/2"
          >
            Read More
          </button>
        </div>
        <div className="relative lg:w-1/3 sm:w-full">
          <div
            className="
              bg-neutral-900 p-3 absolute shadow border-8 border-white drop-shadow-md w-56 top-4"
          >
            <h2 className="text-white font-bold italic text-2xl">
              Traveler's Best Choice
            </h2>
          </div>
          <Image priority src={AboutUs} alt="about us" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;

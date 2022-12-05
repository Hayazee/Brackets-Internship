import React from "react";
import Image from "next/image";
import MountainIcon from "../../images/Adventure and Activity and Booking Trip/MountainIcon.webp";
import BagPackIcon from "../../images/Adventure and Activity and Booking Trip/BagPackIcon.webp";
import FireIcon from "../../images/Adventure and Activity and Booking Trip/FireIcon.webp";
import PathIcon from "../../images/Adventure and Activity and Booking Trip/PathIcon.webp";
import TentIcon from "../../images/Adventure and Activity and Booking Trip/TentIcon.webp";
import SearchFileIcon from "../../images/Adventure and Activity and Booking Trip/SearchFileIcon.webp";

const AdventureActivityAndBookTripComponent = () => {
  return (
    <>
      {/* Adventure and Activity */}
      <section className="mx-auto-componentS my-5 text-center ">
        <h6 className="italic text-yellow-900 font-semibold text-lg">
          -------- Travel By Activity --------
        </h6>
        <h4 className="text-yellow-900 font-bold text-4xl">
          Adventure & Activity
        </h4>
        <div className="flex flex-wrap items-center">
          <div className="w-1/3">
            <div className="p-4 border border-gray-300 mx-3 my-4 hover:shadow-xl flex flex-col justify-items-center items-center">
              <Image
                src={MountainIcon}
                alt="Mountain Icon"
                className="my-2"
                width={100}
                height={100}
              />
              <h5 className="text-yellow-900 text-xl font-medium">Adventure</h5>
              <p className="text-gray-500 text-base">Adventure</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-4 border border-gray-300 mx-3 my-4 hover:shadow-xl flex flex-col justify-items-center items-center">
              <Image
                src={BagPackIcon}
                alt="Bag Pack Icon"
                className="my-2"
                width={40}
                height={40}
              />
              <h5 className="text-yellow-900 text-xl font-medium">Adventure</h5>
              <p className="text-gray-500 text-base">Adventure</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-4 border border-gray-300 mx-3 my-4 hover:shadow-xl flex flex-col justify-items-center items-center">
              <Image
                src={FireIcon}
                alt="Fire Icon"
                className="my-2"
                width={45}
                height={45}
              />
              <h5 className="text-yellow-900 text-xl font-medium">Adventure</h5>
              <p className="text-gray-500 text-base">Adventure</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-4 border border-gray-300 mx-3 my-4 hover:shadow-xl flex flex-col justify-items-center items-center">
              <Image
                src={PathIcon}
                alt="Path Direction Icon"
                className="my-2"
                width={55}
                height={55}
              />
              <h5 className="text-yellow-900 text-xl font-medium">Adventure</h5>
              <p className="text-gray-500 text-base">Adventure</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-4 border border-gray-300 mx-3 my-4 hover:shadow-xl flex flex-col justify-items-center items-center">
              <Image
                src={TentIcon}
                alt="Tent Icon"
                className="my-2"
                width={65}
                height={65}
              />
              <h5 className="text-yellow-900 text-xl font-medium">Adventure</h5>
              <p className="text-gray-500 text-base">Adventure</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-4 border border-gray-300 mx-3 my-4 hover:shadow-xl flex flex-col justify-items-center items-center">
              <Image
                src={SearchFileIcon}
                alt="Search File Icon"
                className="my-2"
                width={55}
                height={55}
              />
              <h5 className="text-yellow-900 text-xl font-medium">Adventure</h5>
              <p className="text-gray-500 text-base">Adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Trip */}
      <section className="BookingTripSectionBg text-center">
        <div className="font-extrabold lg:mx-20 lg:px-20">
          <h1 className="lg:text-3xl sm:text-lg text-white">
            Are you looking for air tickets at the best price? Zoki will help
            you find a book and get going now!
          </h1>
          <button className=" bg-gray-100 border-2 border-yellow-900 text-yellow-700 lg:w-1/3 font-extrabold py-2 px-4 rounded my-4">
            Book Your Trip Now
          </button>
        </div>
      </section>
    </>
  );
};

export default AdventureActivityAndBookTripComponent;

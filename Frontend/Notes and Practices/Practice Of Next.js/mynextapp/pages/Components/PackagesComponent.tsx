import React from "react";
import Image from "next/image";
import PackageOne from "../../images/Packages/PackageOne.webp";
import PackageTwo from "../../images/Packages/PackagesTwo.webp";
import PackageThree from "../../images/Packages/PackageThree.webp";

const PackagesComponent = () => {
  return (
    <section className="text-center mx-auto">
      <div className="bg-yellow-900 py-3">
        <h6 className="italic text-yellow-300 font-semibold text-lg">
          --- EXPLORE GREAT PLACES ---
        </h6>
        <h4 className="text-yellow-300 font-bold text-4xl">Popular Packages</h4>
      </div>
      <div className="PackagesSectionBg">
        <div
          className="
        flex flex-wrap
        lg:px-18"
        >
          <div
            className="
          px-2
          py-5
          lg:w-1/3
          sm:w-full "
          >
            <div className="max-w-sm rounded overflow-hidden shadow border-8 border-white rounded-lg hover:shadow-2xl bg-white">
              <Image
                priority
                className="w-full rounded-lg"
                src={PackageOne}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Na Pali Coast, Hawaii
                </div>
                <p className="text-gray-700 text-base">
                  Kauai has one of the world’s most gorgeous coastlines, with
                  towering waterfalls and isolated crescent beaches. Just be
                  prepared to put in a little effort to soak up its wonders: Na
                  Pali can only be seen from a helicopter, catamaran, or a
                  rather grueling hike.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-clock"></i> 5D / 9H
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-user"></i> 1 Person
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-map-marker-alt"></i> Pakistan
                </span>
              </div>
            </div>
          </div>
          <div
            className="
          px-2
          py-5
          lg:w-1/3
          sm:w-full "
          >
            <div className="max-w-sm rounded overflow-hidden shadow border-8 border-white rounded-lg hover:shadow-2xl bg-white">
              <Image
                priority
                className="w-full rounded-lg"
                src={PackageTwo}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Wulingyuan Scenic Area, China
                </div>
                <p className="text-gray-700 text-base">
                  “Scenic’ might be an understatement here: This 100-square-mile
                  attraction in China’s Hunan Province contains thousands of
                  sandstone pillars that are nature’s version of
                  skyscrapers—some even stretch taller than the Empire State
                  Building’s midpoint.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-clock"></i> 5D / 9H
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-user"></i> 1 Person
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-map-marker-alt"></i> Pakistan
                </span>
              </div>
            </div>
          </div>
          <div
            className="
          px-2
          py-5
          lg:w-1/3
          sm:w-full "
          >
            <div className="max-w-sm rounded overflow-hidden shadow border-8 border-white rounded-lg hover:shadow-2xl bg-white">
              <Image
                priority
                className="w-full rounded-lg"
                src={PackageThree}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Cappadocia, Turkey</div>
                <p className="text-gray-700 text-base">
                  Cappadocia, an area in Turkey where entire cities have been
                  carved into rock, is pretty incredible on its own. But
                  whenever hot air balloons pepper the sky—with many floating up
                  right at sunrise—its beauty level literally skyrockets.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-clock"></i> 5D / 9H
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-user"></i> 1 Person
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <i className="fas fa-map-marker-alt"></i> Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesComponent;

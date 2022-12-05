import React from "react";
import Image from "next/image";
import CustomerOne from "../../images/NewsLetter and Testimonials/CustomerOne.webp";
import CustomerTwo from "../../images/NewsLetter and Testimonials/CustomerTwo.webp";
import CustomerThree from "../../images/NewsLetter and Testimonials/CustomerThree.webp";
import CustomerFour from "../../images/NewsLetter and Testimonials/CustomerFour.webp";
import CustomerFive from "../../images/NewsLetter and Testimonials/CustomerFive.webp";
import CustomerSix from "../../images/NewsLetter and Testimonials/CustomerSix.webp";

const NewsLetterAndTestimonialsComponent = () => {
  return (
    <div>
      <section className="NewsLetterBg text-yellow-900">
        <div className="mx-auto-components lg:flex lg:flex-wrap">
          {/* News Letter */}
          <div className="lg:w-1/3 sm:w-full pl-3 bg-white lg:pt-10 sm:pt-0">
            <h5 className="font-bold my-2 text-lg">
              Sign Up for our news letter
            </h5>
            <h1 className="font-extrabold my-2 text-2xl">
              -------- Be The First <br /> To Know About Deals --------
            </h1>
            <h5 className="font-bold my-2 text-lg">
              Sign Up for the latest details, Packages, and Promotions from
              ZOKI, Grab the limited package/ticket deals at first
            </h5>
            <div className="relative my-2">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-yellow-900 dark:text-yellow-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="EmailAddress-address-icon"
                className="bg-gray-50 border border-gray-300 text-yellow-900 font-extrabold text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder="name@flowbite.com"
              />
            </div>
            <button className="bg-yellow-900 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded w-1/2">
              Subscribe
            </button>
          </div>
          {/* Testimonials  */}
          <div className="lg:w-2/3 sm:w-full sm:py-20 lg:py-0">
            <div
              id="default-carousel"
              className="relative"
              data-carousel="static"
            >
              <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                <div className="duration-700 ease-in-out" data-carousel-item>
                  <span className="absolute font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800 w-full sm:px-0 lg:px-10">
                    <div className="relative">
                      <div className="border-2 border-yellow-900 rounded shadow-lg bg-white p-4">
                        <svg
                          aria-hidden="true"
                          className="mx-auto w-12 h-12 text-yellow-800 dark:text-gray-600"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        <blockquote className="text-2xl italic font-medium text-yellow-900 dark:text-white mb-10">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Cupiditate qui reprehenderit aliquam corrupti
                          asperiores alias magni eius facilis culpa doloribus.
                          <p className="text-gray-700 text-base my-2">
                            -- Laura Nyballz
                          </p>
                        </blockquote>
                        <Image
                          priority
                          src={CustomerOne}
                          alt="Laura Nibolls"
                          className="rounded-full w-40 absolute -right-8 -bottom-8 border-8 border-yellow-100 shadow-sm"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </span>
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800 w-full sm:px-0 lg:px-10">
                    <div className="relative">
                      <div className="border-2 border-yellow-900 rounded shadow-lg bg-white p-4">
                        <svg
                          aria-hidden="true"
                          className="mx-auto w-12 h-12 text-yellow-800 dark:text-gray-600"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        <blockquote className="text-2xl italic font-medium text-yellow-900 dark:text-white mb-10">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Cupiditate qui reprehenderit aliquam corrupti
                          asperiores alias magni eius facilis culpa doloribus.
                          <p className="text-gray-700 text-base my-2">
                            -- Laura Nyballz
                          </p>
                        </blockquote>
                        <Image
                          priority
                          src={CustomerTwo}
                          alt="Laura Nibolls"
                          className="rounded-full w-40 absolute -right-8 -bottom-8 border-8 border-yellow-100 shadow-sm"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </span>
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800 w-full sm:px-0 lg:px-10">
                    <div className="relative">
                      <div className="border-2 border-yellow-900 rounded shadow-lg bg-white p-4">
                        <svg
                          aria-hidden="true"
                          className="mx-auto w-12 h-12 text-yellow-800 dark:text-gray-600"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        <blockquote className="text-2xl italic font-medium text-yellow-900 dark:text-white mb-10">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Cupiditate qui reprehenderit aliquam corrupti
                          asperiores alias magni eius facilis culpa doloribus.
                          <p className="text-gray-700 text-base my-2">
                            -- Laura Nyballz
                          </p>
                        </blockquote>
                        <Image
                          priority
                          src={CustomerThree}
                          alt="Laura Nibolls"
                          className="rounded-full w-40 absolute -right-8 -bottom-8 border-8 border-yellow-100 shadow-sm"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </span>
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800 w-full sm:px-0 lg:px-10">
                    <div className="relative">
                      <div className="border-2 border-yellow-900 rounded shadow-lg bg-white p-4">
                        <svg
                          aria-hidden="true"
                          className="mx-auto w-12 h-12 text-yellow-800 dark:text-gray-600"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        <blockquote className="text-2xl italic font-medium text-yellow-900 dark:text-white mb-10">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Cupiditate qui reprehenderit aliquam corrupti
                          asperiores alias magni eius facilis culpa doloribus.
                          <p className="text-gray-700 text-base my-2">
                            -- Laura Nyballz
                          </p>
                        </blockquote>
                        <Image
                          priority
                          src={CustomerFour}
                          alt="Laura Nibolls"
                          className="rounded-full w-40 absolute -right-8 -bottom-8 border-8 border-yellow-100 shadow-sm"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </span>
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800 w-full sm:px-0 lg:px-10">
                    <div className="relative">
                      <div className="border-2 border-yellow-900 rounded shadow-lg bg-white p-4">
                        <svg
                          aria-hidden="true"
                          className="mx-auto w-12 h-12 text-yellow-800 dark:text-gray-600"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        <blockquote className="text-2xl italic font-medium text-yellow-900 dark:text-white mb-10">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Cupiditate qui reprehenderit aliquam corrupti
                          asperiores alias magni eius facilis culpa doloribus.
                          <p className="text-gray-700 text-base my-2">
                            -- Laura Nyballz
                          </p>
                        </blockquote>
                        <Image
                          priority
                          src={CustomerFive}
                          alt="Laura Nibolls"
                          className="rounded-full w-40 absolute -right-8 -bottom-8 border-8 border-yellow-100 shadow-sm"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </span>
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800 w-full sm:px-0 lg:px-10">
                    <div className="relative">
                      <div className="border-2 border-yellow-900 rounded shadow-lg bg-white p-4">
                        <svg
                          aria-hidden="true"
                          className="mx-auto w-12 h-12 text-yellow-800 dark:text-gray-600"
                          viewBox="0 0 24 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                        <blockquote className="text-2xl italic font-medium text-yellow-900 dark:text-white mb-10">
                          Lorem ipsum, dolor sit amet consectetur adipis icing
                          elit. Cupiditate qui reprehenderit aliquam corrupti
                          asperiores alias magni eius facilis culpa doloribus.
                          <p className="text-gray-700 text-base my-2">
                            -- Laura Nyballz
                          </p>
                        </blockquote>
                        <Image
                          priority
                          src={CustomerSix}
                          alt="Laura Nibolls"
                          className="rounded-full w-40 absolute -right-8 -bottom-8 border-8 border-yellow-100 shadow-sm"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div className="absolute flex -translate-x-1/2 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-white"
                  aria-current="false"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-white"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-white"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-white"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-white"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="4"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full bg-white"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="5"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none  border border-gray-700">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:outline-none  border border-gray-700">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetterAndTestimonialsComponent;

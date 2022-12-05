import React from "react";
import Image from "next/image";
import Link from "next/link";
import FlyWithZokiLogoImage from "../../images/Navbar and footer/logo.webp";
import Head from "next/head";
import Script from "next/script";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>Fly With Zoki</title>
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
      <nav className="bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-gray-90 fixed w-full z-20 top-0 left-0 border-gray-2000">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="https://Fly With Zoki.com/" className="flex items-center">
            <Image
              priority
              src={FlyWithZokiLogoImage}
              className="h-6 mr-3 sm:h-9 width-height"
              alt="Fly With Zoki Logo"
              width={75}
              height={100}
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="flex">
              <ul className="flex flex-col p-4 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="flex-col">
                <Link href="Login">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-900 hover:bg-yellow-7 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mt-2 dark:focus:ring-yellow-900"
                  >
                    Login
                  </button>
                </Link>
                <Link href="Sign-Up">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-900 hover:bg-yellow-7 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mt-2 dark:focus:ring-yellow-900"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

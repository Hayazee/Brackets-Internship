import React from "react";
import Link from "next/link";
import Image from "next/image";
import MainBg from "../../images/Home Page/MainSectionBg.webp";

const MainSectionAndTabsComponent = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <main className="relative">
        {/* Image  */}
        <div className="">
          <Image src={MainBg} alt="" className="w-full" />
        </div>

        {/* tabs  */}
        <div className="absolute TabsPosition text-white">
          <div className="w-1/2 ml-10">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 flex-row"
              role="TabsList"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-b-0 rounded">
                <a
                  className={
                    "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-yellow-700"
                      : "text-yellow-700 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#Flights"
                  role="FlightsTab"
                >
                  Flights
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-b-0 rounded">
                <a
                  className={
                    "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-yellow-700"
                      : "text-yellow-700 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#Hotels"
                  role="HotelsTab"
                >
                  Hotels
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-b-0 rounded">
                <a
                  className={
                    "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-yellow-700"
                      : "text-yellow-700 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#FlightsAndHotels"
                  role="FlightsAndHotelsTab"
                >
                  Car Hire
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded mt-5">
                <div className="flex-auto">
                  <div className="tab-content tab-space">
                    <div className="FlightsTabBg">
                      <div
                        className={
                          openTab === 1 ? "block py-5 px-3" : "hidden py-5 px-3"
                        }
                        id="Flights"
                      >
                        {/* Ticket Types  */}
                        <div className="flex flex-wrap 1/2">
                          <div className="w-1/4 px-4">Ticket Type:</div>
                          <div className="w-1/4 px-4">
                            <div className="flex items-center mb-4">
                              <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-1"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                One Way
                              </label>
                            </div>
                          </div>
                          <div className="w-1/4 px-4">
                            <div className="flex items-center mb-4">
                              <input
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-2"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Return
                              </label>
                            </div>
                          </div>
                          <div className="w-1/4 px-4">
                            <div className="flex items-center mb-4">
                              <input
                                id="default-radio-3"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-3"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Multi City
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Destinations And Dates  */}
                        <div className="flex flex-wrap">
                          <div className="w-1/4">
                            <label
                              htmlFor="input-group-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              From
                            </label>
                            <div className="relative mb-6">
                              <input
                                type="text"
                                id="input-group-1"
                                className="bg-gray-50 text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="From"
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fad fa-plane-departure text-yellow-900"></i>
                              </div>
                            </div>
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Add nearby airports
                              </label>
                            </div>
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Direct flights only
                              </label>
                            </div>
                          </div>
                          <div className="w-1/4">
                            <label
                              htmlFor="input-group-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              To
                            </label>
                            <div className="relative mb-6">
                              <input
                                type="text"
                                id="input-group-1"
                                className="bg-gray-50 text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="To"
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fad fa-plane-arrival text-yellow-900"></i>
                              </div>
                            </div>
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Add nearby airports
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-wrap w-1/4">
                            <div className="w-1/2">
                              <label
                                htmlFor="input-group-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                              >
                                Depart
                              </label>
                              <div className="relative mb-6">
                                <input
                                  type="date"
                                  id="input-group-1"
                                  className="bg-gray-50 text-gray-400 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Depart"
                                />
                              </div>
                            </div>
                            <div className="w-1/2">
                              <label
                                htmlFor="input-group-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                              >
                                Return
                              </label>
                              <div className="relative mb-6">
                                <input
                                  type="date"
                                  id="input-group-1"
                                  className="bg-gray-50 text-gray-400 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Return"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/4">
                            <label
                              htmlFor="default"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Cabin Class & Travelers
                            </label>
                            <select
                              id="default"
                              className="bg-gray-50 text-gray-800 border border-gray-300 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose a country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <Link href="Login">
                              <button
                                type="button"
                                className="text-lg focus:outline-none text-yellow-900 bg-white border-2 border-yellow-900 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg px-8 py-4 dark:focus:ring-yellow-900 w-full"
                              >
                                Search Flights{" "}
                                <i className="pl-3 fad fa-fighter-jet"></i>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="HotelsTabBg">
                      <div
                        className={
                          openTab === 2 ? "block py-5 px-3" : "hidden py-5 px-3"
                        }
                        id="Hotels"
                      >
                        <div className="flex flex-wrap">
                          <div className="w-2/4">
                            <label
                              htmlFor="input-group-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Where do you want to stay?
                            </label>
                            <div className="relative mb-6">
                              <input
                                type="text"
                                id="input-group-1"
                                className="bg-gray-50 text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter A Destination Or Place"
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fad fa-plane-departure text-yellow-900"></i>
                              </div>
                            </div>

                            <div className="">Popular filters:</div>
                            <div className="flex flex-wrap ml-4 mt-1">
                              <div className="w-2/5 flex items-center">
                                <input
                                  id="default-checkbox"
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  htmlFor="default-checkbox"
                                  className="ml-2 text-sm font-medium dark:text-gray-300"
                                >
                                  Free cancellation
                                </label>
                              </div>
                              <div className="w-1/5 flex items-center">
                                <input
                                  id="default-checkbox"
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  htmlFor="default-checkbox"
                                  className="ml-2 text-sm font-medium dark:text-gray-300"
                                >
                                  4 stars
                                </label>
                              </div>
                              <div className="w-1/5 flex items-center">
                                <input
                                  id="default-checkbox"
                                  type="checkbox"
                                  value=""
                                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  htmlFor="default-checkbox"
                                  className="ml-2 text-sm font-medium dark:text-gray-300"
                                >
                                  3 stars
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap w-1/4">
                            <div className="w-1/2">
                              <label
                                htmlFor="input-group-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                              >
                                Check-In
                              </label>
                              <div className="relative mb-6">
                                <input
                                  type="date"
                                  id="input-group-1"
                                  className="bg-gray-50 text-gray-400 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Depart"
                                />
                              </div>
                            </div>
                            <div className="w-1/2">
                              <label
                                htmlFor="input-group-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                              >
                                Check-Out
                              </label>
                              <div className="relative mb-6">
                                <input
                                  type="date"
                                  id="input-group-1"
                                  className="bg-gray-50 text-gray-400 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Return"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/4">
                            <label
                              htmlFor="default"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Guests And Rooms
                            </label>
                            <select
                              id="default"
                              className="bg-gray-50 text-gray-800 border border-gray-300 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose a country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <Link href="Login">
                              <button
                                type="button"
                                className="text-lg focus:outline-none text-yellow-900 bg-white border-2 border-yellow-900 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg px-8 py-4 dark:focus:ring-yellow-900 w-full"
                              >
                                Search Flights{" "}
                                <i className="pl-1 fad fa-fighter-jet"></i>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CarHireTabBg">
                      <div
                        className={
                          openTab === 3 ? "block py-5 px-3" : "hidden py-5 px-3"
                        }
                        id="FlightsAndHotels"
                      >
                        {/* Ticket Types  */}
                        <div className="flex flex-wrap 1/2">
                          <div className="w-1/4 px-4">Ticket Type:</div>
                          <div className="w-1/4 px-4">
                            <div className="flex items-center mb-4">
                              <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-1"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                One Way
                              </label>
                            </div>
                          </div>
                          <div className="w-1/4 px-4">
                            <div className="flex items-center mb-4">
                              <input
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-2"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Return
                              </label>
                            </div>
                          </div>
                          <div className="w-1/4 px-4">
                            <div className="flex items-center mb-4">
                              <input
                                id="default-radio-3"
                                type="radio"
                                value=""
                                name="default-radio"
                                className="w-4 h-4  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-radio-3"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Multi City
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Destinations And Dates  */}
                        <div className="flex flex-wrap">
                          <div className="w-1/4">
                            <label
                              htmlFor="input-group-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              From
                            </label>
                            <div className="relative mb-6">
                              <input
                                type="text"
                                id="input-group-1"
                                className="bg-gray-50 text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="From"
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fad fa-plane-departure text-yellow-900"></i>
                              </div>
                            </div>
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Add nearby airports
                              </label>
                            </div>
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Direct flights only
                              </label>
                            </div>
                          </div>
                          <div className="w-1/4">
                            <label
                              htmlFor="input-group-1"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              To
                            </label>
                            <div className="relative mb-6">
                              <input
                                type="text"
                                id="input-group-1"
                                className="bg-gray-50 text-black border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="To"
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fad fa-plane-arrival text-yellow-900"></i>
                              </div>
                            </div>
                            <div className="flex items-center mb-4">
                              <input
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ml-2 text-sm font-medium dark:text-gray-300"
                              >
                                Add nearby airports
                              </label>
                            </div>
                          </div>
                          <div className="flex flex-wrap w-1/4">
                            <div className="w-1/2">
                              <label
                                htmlFor="input-group-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                              >
                                Depart
                              </label>
                              <div className="relative mb-6">
                                <input
                                  type="date"
                                  id="input-group-1"
                                  className="bg-gray-50 text-gray-400 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Depart"
                                />
                              </div>
                            </div>
                            <div className="w-1/2">
                              <label
                                htmlFor="input-group-1"
                                className="block mb-2 text-sm font-medium dark:text-white"
                              >
                                Return
                              </label>
                              <div className="relative mb-6">
                                <input
                                  type="date"
                                  id="input-group-1"
                                  className="bg-gray-50 text-gray-400 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Return"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/4">
                            <label
                              htmlFor="default"
                              className="block mb-2 text-sm font-medium dark:text-white"
                            >
                              Cabin Class & Travelers
                            </label>
                            <select
                              id="default"
                              className="bg-gray-50 text-gray-800 border border-gray-300 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option selected>Choose a country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                            </select>
                            <Link href="Login">
                              <button
                                type="button"
                                className="text-lg focus:outline-none text-yellow-900 bg-white border-2 border-yellow-900 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg px-8 py-4 dark:focus:ring-yellow-900 w-full"
                              >
                                Search Flights{" "}
                                <i className="pl-3 fad fa-fighter-jet"></i>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSectionAndTabsComponent;

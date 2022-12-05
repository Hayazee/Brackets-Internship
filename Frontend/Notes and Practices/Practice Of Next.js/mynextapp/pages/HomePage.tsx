import React from "react";
import AboutUsComponent from "./Components/AboutUsComponent";
import MainSectionAndTabsComponent from "./Components/MainSectionAndTabsComponent";
import PackagesComponent from "./Components/PackagesComponent";
import AdventureActivityAndBookTripComponent from "./Components/AdventureActivityAndBookTripComponent";
import PerfectTripComponent from "./Components/PerfectTripComponent";
import NewsLetterAndTestimonialsComponent from "./Components/NewsLetterAndTestimonialsComponent";
const HomePage = () => {
  return (
    <>
      <MainSectionAndTabsComponent />
      <AboutUsComponent />
      <PackagesComponent />
      <AdventureActivityAndBookTripComponent />
      <PerfectTripComponent />
      <NewsLetterAndTestimonialsComponent />
    </>
  );
};

export default HomePage;

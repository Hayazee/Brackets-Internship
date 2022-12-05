import type { NextPage } from "next";
import Navbar from "./Components/NavbarComponent";
import HomePage from "./HomePage";
import Footer from "./Components/FooterComponent";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Admission from "../admission/Admission";
import Banner from "../banner/Banner";
import BannerBackground from "../banner/BannerBackground";
import Carusel from "../carusel/Carusel";
import Footer from "../footer/Footer";
import MessageChairman from "../message/MessageChairman";
import MessageVC from "../message/MessageVC";
import Navbar from "../navbar/Navbar";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carusel />
      <Admission />
      <WelcomeMessage />
      <MessageVC />
      <MessageChairman />
      <Banner />
      <BannerBackground />
      <Footer />
    </div>
  );
};

export default Home;

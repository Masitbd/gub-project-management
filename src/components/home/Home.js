import React from "react";
import Admission from "../admission/Admission";
import Banner from "../banner/Banner";
import BannerBackground from "../banner/BannerBackground";
import Carusel from "../carusel/Carusel";
import MessageChairman from "../message/MessageChairman";
import MessageVC from "../message/MessageVC";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";

const Home = () => {
  return (
    <div>
      <Carusel />
      <Admission />
      <WelcomeMessage />
      <MessageVC />
      <MessageChairman />
      <Banner />
      <BannerBackground />
    </div>
  );
};

export default Home;

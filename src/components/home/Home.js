import React from "react";
import Admission from "../admission/Admission";
import Carusel from "../carusel/Carusel";
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
    </div>
  );
};

export default Home;

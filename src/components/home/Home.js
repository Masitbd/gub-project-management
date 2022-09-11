import React from "react";
import Admission from "../admission/Admission";
import Carusel from "../carusel/Carusel";
import MessageVC from "../messageVC/MessageVC";
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
    </div>
  );
};

export default Home;

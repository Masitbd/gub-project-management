import React from "react";
import Admission from "../admission/Admission";
import Carusel from "../carusel/Carusel";
import Navbar from "../navbar/Navbar";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carusel />
      <Admission />
      <WelcomeMessage />
    </div>
  );
};

export default Home;

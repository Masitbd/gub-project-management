import React from "react";
import Admission from "../admission/Admission";
import Carusel from "../carusel/Carusel";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carusel />
      <Admission />
    </div>
  );
};

export default Home;

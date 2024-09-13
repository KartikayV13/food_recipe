import React from "react";
import Herosection from "../Components/Herosection";
import Imporveskills from "../Components/Imporveskills";
import Quotesection from "../Components/Quotesection";
import ChiefSection from "../Components/ChiefSection";
import "../PagesCss/Home.css";

const Home = () => {
  return (
    <>
      <Herosection />
      <Imporveskills />
      <Quotesection />
      <ChiefSection />
    </>
  );
};

export default Home;

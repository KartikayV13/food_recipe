import React from "react";
import "../Styles/ChiefsSection.css";
import ChiefCard from "./ChiefCard";

const ChiefSection = () => {
  const chefs = [
    {
      name: "Sanjeev Kapoor",
      img: "/Image/Top-Chiefs/chief-1.jpg",
      recipeCount: "2",
      cuisine: "Indian cuisine",
    },
    {
      name: "Vikas Khanna",
      img: "/Image/Top-Chiefs/chief-2.jpg",
      recipeCount: "4",
      cuisine: "Indian cuisine",
    },
    {
      name: "Ranveer Brar",
      img: "/Image/Top-Chiefs/chief-3.jpg",
      recipeCount: "6",
      cuisine: "Indian cuisine",
    },
    {
      name: "Madhur Jaffrey",
      img: "/Image/Top-Chiefs/chief-4.jpg",
      recipeCount: "9",
      cuisine: "Indian cuisine",
    },
    {
      name: "Harpal Singh Sokhi",
      img: "/Image/Top-Chiefs/chief-5.jpg",
      recipeCount: "5",
      cuisine: "Indian cuisine",
    },
    {
      name: "Vineet Bhatia",
      img: "/Image/Top-Chiefs/chief-6.jpg",
      recipeCount: "10",
      cuisine: "Indian cuisine",
    },
  ];
  return (
    <div className="sections chiefs">
      <h1 className="title">Our Top Chiefs</h1>

      <div className="chief-container">
        {/* <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard /> */}
        {chefs.map((chefs, index) => (
          <ChiefCard kay={index} chefs={chefs} />
        ))}
      </div>
    </div>
  );
};

export default ChiefSection;

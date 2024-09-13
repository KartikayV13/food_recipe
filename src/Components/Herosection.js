import React from "react";
import "../Styles/Herosection.css";
import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";

const Herosection = () => {
  const images = [
    "/Image/Gallery/img-1.jpg",
    "/Image/Gallery/img-2.jpg",
    "/Image/Gallery/img-3.jpg",
    "/Image/Gallery/img-4.jpg",
    "/Image/Gallery/img-5.jpg",
    "/Image/Gallery/img-6.jpg",
    "/Image/Gallery/img-7.jpg",
    "/Image/Gallery/img-8.jpg",
    "/Image/Gallery/img-9.jpg",
  ];

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What are we about</h1>
        <p className="info">
          Find-Food-Recipe is aplace where you can please your soul and tummy
          with delicious food recepies of all the cuisine. And our servised is
          absolutely free. so start exploring now
        </p>
        <Link className="explore" to={"/recipes"}>
          <button className="btn">Explore Now</button>
        </Link>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Herosection;

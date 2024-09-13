import React from "react";
import "../Styles/ChiefCard.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ChiefCard = ({ chefs }) => {
  return (
    <div className="chief-card">
      <img src={chefs.img} alt="" />
      <div className="chief-card-info">
        <h3 className="chief-card-name">{chefs.name}</h3>
        <p className="chief-recipe-count">
          Reciepes: <b>{chefs.recipeCount}</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>{chefs.cuisine}</b>
        </p>
        <p className="chief-icons">
          <FaFacebook className="fb" />
          <FaTwitter className="tweet" />
          <FaInstagram className="insta" />
        </p>
      </div>
    </div>
  );
};

export default ChiefCard;

import React from "react";
import "../Styles/Quotesection.css";
import { FaQuoteLeft } from "react-icons/fa";

const Quotesection = () => {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FaQuoteLeft className="quote-icon" />
        Food is everything we are. It's an extension of nationalist feeling,
        ethnic feeling, your personal history, your province, your region, your
        tribe, your granma. it's inseparable from those from the get-go.
      </p>
      <p className="quote-author"> - Anthony Bourdain</p>
    </div>
  );
};

export default Quotesection;

import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-section">
        <p className="titles">Sanji's-Recipe</p>
        <p>
          Sanji's-Recipe is a place where you can please your soul and tummy
          with delicious food recipes od all cuisine. And our service is
          absolutely free.
        </p>
        <p> &copy; 2021 | All Rights Reserved </p>
      </div>
      <div className="footer-section">
        <p className="titles">Contact Us</p>
        <p>@Email</p>
        <p>Phone Number</p>
        <p>Phone umber</p>
      </div>
      <div className="footer-section">
        <p className="titles">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Address</p>
      </div>
    </div>
  );
};

export default Footer;

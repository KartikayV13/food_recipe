import React from "react";
import "../Styles/CustomImage.css";

const CustomImage = ({ src }) => {
  return (
    <div className="custom-image">
      <img className="img" src={src} alt="img" />
    </div>
  );
};

export default CustomImage;

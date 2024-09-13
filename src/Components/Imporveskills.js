import React from "react";
import "../Styles/Imporveskills.css";

const Imporveskills = () => {
  const list = [
    "Learn new recepies",
    "Experiment with food",
    "Write your own recipe",
    "Know nutrition facts",
    "Get cooking tips",
    "Get ranked",
  ];

  return (
    <div className="section improve-skills ">
      <div className="col img">
        <img src="/Image/Gallery/img-10.jpeg" alt="" />
      </div>
      <div className="col typography2">
        <h1 className="title">Imporve Your Culinary Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}{" "}
          </p>
        ))}

        <button className="btn">Signup now</button>
      </div>
    </div>
  );
};

export default Imporveskills;

import React from "react";
import "../Styles/RecipeCard.css";
import { NavLink } from "react-router-dom";

const ReciepeCard = ({ meal }) => {
  console.log({ meal });

  return (
    <div className="recipe-card">
      {meal ? (
        <div className="card-details">
          <img
            className="card-img"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <p className="dish-name">{meal.strMeal}</p>

          <NavLink className="NavLink" to={`/ingridients/${meal.idMeal}`}>
            <button className="btn">Details</button>
          </NavLink>
        </div>
      ) : (
        <div className="sorry">
          <img src="/Image/Sorry/Minions.png" alt="img" />
          <p className="sry-text">"Sorry, no data found"</p>
        </div>
      )}
    </div>
  );
};

export default ReciepeCard;

import React from "react";
import "../Styles/Ingridient.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Ingridients = () => {
  const { mealId } = useParams(); // Extract mealId from URL
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading meal details.</div>;
  return (
    <div className="ingridient-container">
      {meal ? (
        <div className="detail-box">
          <img
            className="detail-img"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <div className="name-ingridient">
            <h1 className="name">{meal.strMeal}</h1>
            <p className="detail-ingridient">
              <b>Instruction's : </b> <br /> {meal.strInstructions}
            </p>
          </div>
        </div>
      ) : (
        <div className="sorry">
          <img src="" alt="" />
          <p>No meal details available</p>
        </div>
      )}
    </div>
  );
};

export default Ingridients;

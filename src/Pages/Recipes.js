import React from "react";
import PreviousSearches from "../Components/PreviousSearches";
import { useState } from "react";

import "../PagesCss/Recipes.css";
import ReciepeCard from "../Components/ReciepeCard";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchMeals = async (searchQuery) => {
    setSearched(true); // Set searched to true when a search is performed
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.meals || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  console.log(data);

  const handleSearch = (searchQuery) => {
    setSearch(searchQuery);
    fetchMeals(searchQuery);
  };

  return (
    <>
      {" "}
      <div className="recipe-page">
        <PreviousSearches onSearch={handleSearch} />
        <div className="recipe-container">
          {searched && data.length > 0 ? (
            data.map((meal, index) => <ReciepeCard key={index} meal={meal} />)
          ) : searched ? (
            <div className="sorry">
              <img
                className="sry-img"
                src="/Image/Sorry/Minions.png"
                alt="img"
              />
              <p className="sry-text">
                " Oops Sorry Can't get your data <br /> You can try
                something-else"
              </p>
            </div>
          ) : (
            <div className="search">
              <p className="search-text">"Shall we start" </p>
              <img className="search-img" src="/Image/Sorry/Sanji.png" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Recipes;

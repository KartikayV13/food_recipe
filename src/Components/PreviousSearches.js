import React from "react";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const PreviousSearches = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const searches = [
    "pizza",
    "burger",
    "cookies",
    "omellete",
    "cake",
    "biryani",
    "salad",
    "lasagna",
    "pudding",
    "soup",
  ];

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {searches.map((item, index) => (
          <div
            style={{ animationDelay: index * 0.1 + "s" }}
            key={index}
            className="search-item"
            onClick={() => onSearch(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" onChange={handleInput} />
        <button className="btns" onClick={handleSearch}>
          <IoSearch />
        </button>
      </div>
    </div>
  );
};

export default PreviousSearches;

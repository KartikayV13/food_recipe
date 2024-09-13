import React from "react";
import "../PagesCss/Settings.css";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";

const Settings = () => {
  const primaryColors = [
    // yellow
    "rgb(255,215,9)",
    // red
    "rgb(255,0,0)",
    //  sky blue
    "rgb(0,191,255)",
    //lime green
    "rgb(0,255,0)",
    //dark maganta
    "rgb(139,0,139)",
  ];

  const fontSizes = [
    {
      title: "Small",
      value: "12px",
    },
    {
      title: "Medium",
      value: "16px",
    },
    {
      title: "Large",
      value: "20px",
    },
  ];

  const defaultSettings = {
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--primary-color": "rgb(255, 0, 86)",
    "--text-color": "black",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  };

  // Load settings from localStorage if available, else default
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("settings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });
  const themes = [
    {
      "--background-light": "#fff",
      "--background-color": "#fff",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "black",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29 , 29 , 29",
      "--background-light": "rgb(77 , 77 , 77)",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  const changeTheme = (i) => {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    //update settings
    let _settings = { ...settings };
    for (let key in _theme) {
      // console.log(_theme[key]);
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
    localStorage.setItem("theme", i === 0 ? "light" : "dark");
  };

  const changeColor = (i) => {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
    localStorage.setItem("primaryColor", i);
  };

  const [primaryColor, setPrimaryColor] = useState(() => {
    const savedColor = localStorage.getItem("primaryColor");
    return savedColor ? parseInt(savedColor) : 1; //we used parseInt bcz the data was in array
  });

  const [fontSize, setFontSize] = useState(() => {
    const savedFontSize = localStorage.getItem("fontSize");
    return savedFontSize ? parseInt(savedFontSize) : 1;
  });

  const changeFontSize = (i) => {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
    localStorage.setItem("fontSize", i);
  };

  return (
    <div>
      <div className="sections d-block">
        {/* -----Preffered theme ---------- */}

        <h2>Prefferd Theme</h2>
        <div className="options-container">
          <div className="options light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FaRegCircleCheck className="chk" />
              </div>
            )}
          </div>
          <div className="options dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FaRegCircleCheck className="chk" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ------Primary color ------ */}

      <div className="sections d-block">
        <h2>Primary Color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              className="options light"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
            >
              {primaryColor === index && (
                <div className="check">
                  <FaRegCircleCheck className="chk" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --------Font Size--------- */}

      <div className="sections d-block">
        <h2>Font Size</h2>
        <div className="options-container">
          {fontSizes.map((size, index) => (
            <button className="btn" onClick={() => changeFontSize(index)}>
              {size.title}
              {fontSize === index && (
                <span>
                  <FaRegCircleCheck className="chk" />{" "}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;

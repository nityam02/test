import React, { useState } from "react";

import "./styles.css";
const ToogleSwitch = ({ onClick }) => {
  const [language, setLanguage] = useState("en"); //

  const handleToggle = (event) => {
    const newLanguage = event.target.checked ? "no" : "en";
    setLanguage(newLanguage);
    onClick(newLanguage);
  };
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round" data-value={language}>
          {language === "en" ? "Eng" : "No"}
        </span>
      </label>
    </>
  );
};

export default ToogleSwitch;

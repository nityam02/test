"use client";

import * as React from "react";
import useTranslation from "../../hooks/useTranslation";
import "./styles.css";
import ToogleSwitch from "../ToogleSwitch";

const logo =
  "https://eco-prod-bucket.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/09/29084448/secundo-logo-black.png";

export const HeaderMain = () => {
  const { setLocale } = useTranslation();

  const handleLanguageChange = (event: React.ReactNode) => {
    const selectLang = event?.target?.checked ? "no" : "en";
    setLocale(selectLang);
  };

  return (
    <nav className="component-top-header">
      <div className="w-full flex">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Products</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
      </div>
      <div className="select-container">
        <ToogleSwitch onClick={handleLanguageChange} />
      </div>
    </nav>
  );
};

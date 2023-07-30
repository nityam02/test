import React from "react";
import "./styles.css";

export const Loader = () => {
  return (
    <div className="empty-card">
      <div className="bg-white rounded-6 skeleton-group-box">
        <div className="skelton-group"></div>
      </div>
    </div>
  );
};

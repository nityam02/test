import React from "react";
import "./styles.css";

interface Props {
  direction: string;
  handleArrowClick: (dir: string) => void;
  size?: {
    btn: number;
    icon: number;
  };
}

const Arrow = ({
  direction,
  handleArrowClick,
  size = { btn: 40, icon: 24 },
}: Props) => {
  return (
    <button
      type="button"
      className={`arrowWrapper ${direction === "PREV" ? "left" : "right"}`}
      onClick={(e) => {
        e.stopPropagation();
        handleArrowClick(direction);
      }}
      aria-label="button-arrow"
    >
      {direction === "PREV" ? (
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/long-arrow-left.png"
          alt="long-arrow-left"
        />
      ) : (
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/long-arrow-right--v1.png"
          alt="long-arrow-right--v1"
        />
      )}
    </button>
  );
};

export default Arrow;

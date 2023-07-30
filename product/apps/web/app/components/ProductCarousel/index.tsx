"use client";
import React, { useState } from "react";
import ProductCard from "../ProductCard";
import useArrowScroll from "../../hooks/useArrowScroll";
import { DIRECTION_PREV, DIRECTION_NEXT } from "./const";
import { checkArrowShow } from "../../common/utility";
import Arrow from "../Arrow";
import "./styles.css";

const ProductCarousel = ({ products }) => {
  const [listContainerRef, handleArrowClick] = useArrowScroll();
  const [showArrows, setShowArrow] = useState({ left: false, right: true });

  const handleArrowShow = (state: { left: boolean; right: boolean }) => {
    setShowArrow(state);
  };

  return (
    <div className="relative">
      {showArrows.left && (
        <Arrow
          direction={DIRECTION_PREV}
          handleArrowClick={handleArrowClick(DIRECTION_PREV)}
        />
      )}

      <div
        className="product-list"
        ref={listContainerRef}
        onScroll={(e) => {
          const ele = e.target as HTMLDivElement;
          handleArrowShow(
            checkArrowShow(ele.clientWidth, ele.scrollWidth, ele.scrollLeft)
          );
        }}
      >
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {showArrows.right && (
        <Arrow
          direction={DIRECTION_NEXT}
          handleArrowClick={handleArrowClick(DIRECTION_NEXT)}
        />
      )}
    </div>
  );
};

export default ProductCarousel;

"use client";
import React, { useState, useRef } from "react";
import ImageMagnifier from "../ImageMagnifier";
import { DIRECTION_PREV, DIRECTION_NEXT } from "./const";
import { checkArrowShow } from "../../common/utility";
import Arrow from "../Arrow";
import useTranslation from "../../hooks/useTranslation";
import useArrowScroll from "../../hooks/useArrowScroll";

import "./styles.css";
import ImageCard from "./ImageCard";

const ImageCarousel = ({ images }: { images: any }) => {
  const { translate } = useTranslation();
  const [listContainerRef, handleArrowClick] = useArrowScroll();
  const [showArrows, setShowArrow] = useState({ left: false, right: true });
  const [currentImage, setCurrentImage] = useState(images[0]?.thumbnail_link);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageFeedRef = useRef(false);

  const handleClick = (e) => {
    if (e.target.dataset.index && e.target.src) {
      setCurrentIndex(parseInt(e.target.dataset.index));
      setCurrentImage(e.target.src);
    }
  };
  const handleArrowShow = (state: { left: boolean; right: boolean }) => {
    setShowArrow(state);
  };

  return (
    <div ref={imageFeedRef} className="image-carousel-container">
      <ImageMagnifier
        smallImage={currentImage}
        largeImage={currentImage}
        active
      />
      <div className="relative">
        {showArrows.left && (
          <Arrow
            direction={DIRECTION_PREV}
            handleArrowClick={handleArrowClick(DIRECTION_PREV)}
          />
        )}
        <div
          className="imageHolder"
          onClick={handleClick}
          ref={listContainerRef}
          onScroll={(e) => {
            const ele = e.target as HTMLDivElement;
            handleArrowShow(
              checkArrowShow(ele.clientWidth, ele.scrollWidth, ele.scrollLeft)
            );
          }}
        >
          {images?.map(({ url_link }, index) => (
            <ImageCard
              key={index}
              imageSrc={url_link}
              active={currentIndex === index}
              index={index}
            />
          ))}
        </div>
        {showArrows.right && (
          <Arrow
            direction={DIRECTION_NEXT}
            handleArrowClick={handleArrowClick(DIRECTION_NEXT)}
          />
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;

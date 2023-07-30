import React, { memo, useRef, useState, useEffect } from "react";

import "./styles.css";

const ImageMagnifier = ({ active, smallImage, largeImage }) => {
  const zoom = useRef(null);
  const lastZoom = useRef("50% 50%");
  const [isHovering, setIsHovering] = useState(false);
  const fallbackBackground = smallImage;
  const initialBackgroundImage = fallbackBackground;

  const magnifier = (e) => {
    setIsHovering(true);
    const bound = e?.target?.getBoundingClientRect() || {};
    const container = e.currentTarget;
    const even = e.nativeEvent;
    requestAnimationFrame(() => {
      const x =
        ((even.clientX - bound.left || 0) / container.offsetWidth) * 100;
      const y =
        ((even.clientY - bound.top || 0) / container.offsetHeight) * 100;

      if (zoom.current) {
        const image = new window.Image();
        const loadedImageUrl = largeImage;
        image.src = loadedImageUrl;
        image.onload = () => {
          requestAnimationFrame(() => {
            if (zoom.current) {
              zoom.current.style.backgroundImage = `url(${loadedImageUrl})`;
            }
          });
        };

        zoom.current.style.backgroundPosition = `${x}% ${y}%`;
      }

      lastZoom.current = `${x}% ${y}%`;
    });
  };

  useEffect(() => {
    setIsHovering(false);
  }, [smallImage]);

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={`magnifyContainer ${active ? "active" : ""}`}
      onMouseMove={(e) => (active ? magnifier(e) : e.preventDefault())}
      onMouseLeave={handleMouseLeave}
      key={smallImage}
    >
      <div
        className="magnifier"
        style={{
          display: isHovering ? "block" : "none",
        }}
        ref={zoom}
        key={largeImage}
      />
      <img src={smallImage} width="100%" height="100%" />
    </div>
  );
};

export default memo(ImageMagnifier);

import React from "react";
import useIntersect from "../../hooks/useIntersect";

interface Props {
  active: boolean;
  index: number;
  imageSrc: string;
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};
const ImageCard = ({ active, index, imageSrc }: Props) => {
  const targetRef = useIntersect<HTMLImageElement>((entry) => {
    const img = entry.target as HTMLImageElement;
    img.src = img.dataset.src;
    delete img.dataset.src;
  }, options);

  return (
    <div className={`imageContainer ${active ? "border" : ""}`}>
      <img
        ref={targetRef}
        src="https://img.icons8.com/ios/50/spinner-frame-2.png"
        width="50"
        height="50"
        data-index={index}
        data-src={imageSrc}
        alt={`Image ${index}`}
        className={`w-full h-full object-cover transition-opacity duration-500 top-0 left-0`}
      />
    </div>
  );
};

export default ImageCard;

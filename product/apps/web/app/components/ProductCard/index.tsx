import React, { useEffect, useRef } from "react";
import useIntersect from "../../hooks/useIntersect";
import "./styles.css";

export const dynamic = "force-dynamic";

// Interface for the Product data
interface Product {
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const targetRef = useIntersect<HTMLImageElement>((entry) => {
    const img = entry.target as HTMLImageElement;
    img.src = img.dataset.src;
    delete img.dataset.src;
  }, options);
  console.log("product", product);
  return (
    <div className="product-card">
      <img
        ref={targetRef}
        src="https://img.icons8.com/dusk/64/spinner-frame-2.png"
        data-src={product?.cart_image}
        alt={product?.title}
        className="product-image"
      />
      <h2 className="product-name">{product?.title}</h2>
      <p className="product-price">${product?.amount.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;

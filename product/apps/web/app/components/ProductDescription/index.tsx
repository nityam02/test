"use client";
import React from "react";
import "./styles.css";
import useTranslation from "../../hooks/useTranslation";

import DiscountPrice from "../../components/DiscountPrice";

const ProductDescription = ({ product }) => {
  const { translate } = useTranslation();
  const {
    category,
    subcategory,
    name,
    amount,
    selling_price,
    currency,
    description,
    images,
    attributes,
    google_review,
  } = product;

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>
        <strong>Category:</strong> {category} - {subcategory}
      </p>
      <p>
        <strong>Price:</strong> {selling_price} {currency}
      </p>
      <p>{description}</p>
      {/* Product attributes */}
      <div className="product-attributes">
        <h3>Attributes</h3>
        <ul>
          {attributes.map(({ attribute, value }, index) => (
            <li key={index}>
              <strong>{attribute}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>

      {/* Google Review */}
      <div className="google-review">
        <h3>{google_review.text}</h3>
        <p>Rating: {google_review.rate}</p>
      </div>
    </div>
  );
};

export default ProductDescription;

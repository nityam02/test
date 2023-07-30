"use client";
import React from "react";
import "./styles.css";
import useTranslation from "../../hooks/useTranslation";

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
        <strong>{translate("cat")}:</strong> {category} - {subcategory}
      </p>
      <p>
        <strong>{translate("pr")}</strong> {selling_price} {currency}
      </p>
      <p>{description}</p>
      {/* Product attributes */}
      <div className="product-attributes">
        <h3>{translate("attr")}</h3>
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
        <p>
          {translate("google_review")}: {google_review.rate}
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;

"use client";
import React from "react";
import "./styles.css";
import useTranslation from "../../hooks/useTranslation";

import DiscountPrice from "../../components/DiscountPrice";

const ProductDescription = ({ product }) => {
  const { translate } = useTranslation();

  return (
    <div className={"descCont w-1/2"}>
      <div className={"productDesc text-3xl font-bold mb-4"}>
        {product.name}
      </div>
      {/* <p className="text-lg mb-4">{product.description}</p> */}
      <div className={"flexCart"}>
        <div className={"priceSection"}>
          <div className={"productPrice text-xl font-bold"}>
            ${product.selling_price}
          </div>
          <DiscountPrice
            discountPercentage={product.discount_percentage}
            slashPrice={product.discounted_price}
          />
        </div>
        <button>Add to Cart</button>
      </div>
      <div className={"desc"}>
        <p className={"details"}>Details</p>
        <span className={"keyStyles"}>Product Description : </span>
        <span>{translate("product_desc")}</span>
      </div>
    </div>
  );
};

export default ProductDescription;

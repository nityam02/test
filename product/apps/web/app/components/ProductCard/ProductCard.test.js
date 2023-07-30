import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProductCard from "./index";

jest.mock("../../hooks/useIntersect", () => () => ({ current: null }));

const productData = {
  name: "Product 1",
  price: 19.99,
  image: "product-image-url.png",
  cart_image: "product-cart-image-url.png",
  amount: 19.99,
  title: "Product Title",
};

describe("ProductCard", () => {
  it("renders the product card with correct data", () => {
    const { getByText } = render(<ProductCard product={productData} />);
    expect(getByText("$19.99")).toBeInTheDocument();
  });
});

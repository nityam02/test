import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProductCarousel from "./index";

jest.mock("../../hooks/useArrowScroll", () => () => {
  const listContainerRef = React.createRef();
  const handleArrowClick = jest.fn();
  return [listContainerRef, handleArrowClick];
});

jest.mock("../../common/utility", () => ({
  checkArrowShow: jest.fn(),
}));

describe("ProductCarousel", () => {
  it("renders the product carousel correctly", () => {
    const mockArrowState = { left: true, right: false };
    const mockCheckArrowShow = jest.fn().mockReturnValue(mockArrowState);
    jest.mock("../../common/utility", () => ({
      checkArrowShow: mockCheckArrowShow,
    }));

    const { getByText, getByTestId } = render(
      <ProductCarousel products={mockProducts} />
    );
  });
});

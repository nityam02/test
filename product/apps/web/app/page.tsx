import React from "react";

import ProductDescription from "./components/ProductDescription";
import ImageCarousel from "./components/ImageCarousel";
import { Loader } from "ui";
import loadable from "next/dynamic";
import "../styles/main.css";

export const dynamic = "force-dynamic";

const ProductCarousel = loadable(() => import("./components/ProductCarousel"), {
  loading: () => <Loader />,
  ssr: false,
});

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = async () => {
  const data = await fetch(`http://0.0.0.0:3000/api/product/getById/1234`, {
    cache: "no-cache",
  });
  const result = await data.json();
  const {
    product,
    similar_product: { products },
  } = result;
  return (
    <>
      <div className="component-product">
        <div className="component-images-container">
          <ImageCarousel images={product.images}></ImageCarousel>
          <ProductDescription product={product} />
        </div>
        <h2>Similar Products</h2>
        <ProductCarousel products={products} />
      </div>
    </>
  );
};

export default ProductDetail;

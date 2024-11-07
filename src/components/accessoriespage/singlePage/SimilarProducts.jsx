import React from "react";
import ProductCard from "../MainSection/ProductCard";

export default function SimilarProducts() {
  return (
    <div className="lg:px-[120px] py-10 px-5">
      <h5 className="font-semibold text-xl mb-5">Similar Products</h5>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

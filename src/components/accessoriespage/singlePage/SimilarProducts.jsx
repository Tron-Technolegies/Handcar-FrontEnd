import React from "react";
import ProductCard from "../MainSection/ProductCard";

export default function SimilarProducts({ products }) {
  return (
    <div className="lg:px-[120px] py-10 px-5">
      <h5 className="font-semibold text-xl mb-5">Similar Products</h5>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-3">
        {products &&
          products.length > 0 &&
          products.map((x) => (
            <ProductCard
              key={x.id}
              name={x.name}
              brand={x.brand}
              price={x.price}
              id={x.id}
              image={x.image}
            />
          ))}
      </div>
    </div>
  );
}

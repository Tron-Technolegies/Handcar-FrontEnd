import React from "react";
import ProductCard from "./ProductCard";
import { CiFilter } from "react-icons/ci";

const list = ["Default", "Low - High", "High - Low"];

export default function ProductList({ setShowSmallFilter }) {
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <p className="text-[#8F8F8F] md:text-xl text-sm font-bold">
          531 Results
        </p>
        <div className="flex md:gap-5 gap-1 items-center w-fit text-[#8F8F8F] md:text-base text-sm">
          <p className="w-auto">Sort&nbsp;By</p>
          <select
            className={`w-full py-1 px-3 rounded-lg text-[#8F8F8F] bg-transparent border border-gray-300 `}
          >
            {list?.map((item) => (
              <option
                className="border-b py-1 border-gray-300"
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="flex gap-1 items-center my-5 lg:hidden"
        onClick={() => setShowSmallFilter(true)}
      >
        <span>
          <CiFilter />
        </span>
        Filter
      </button>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 place-items-center my-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

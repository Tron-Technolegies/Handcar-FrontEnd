import React from "react";
import BrandCard from "./BrandCard";

const brands = [
  "/spareparts/brand-1.png",
  "/spareparts/brand-2.png",
  "/spareparts/brand-3.png",
  "/spareparts/brand-4.png",
  "/spareparts/brand-5.png",
  "/spareparts/brand-6.png",
  "/spareparts/brand-7.png",
  "/spareparts/brand-8.png",
];

export default function SparePartsBrands() {
  return (
    <div className="lg:px-[120px] px-10 py-10 flex flex-col gap-10 items-center">
      <h1 className="md:text-4xl text-2xl font-semibold">
        Find spare parts from top brands
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-2 gap-y-5 w-full place-items-center">
        {brands.map((x, index) => (
          <BrandCard key={index} img={x} />
        ))}
      </div>
      {/* <button className="px-4 py-2 border rounded-lg border-black">
        See More Brands
      </button> */}
    </div>
  );
}

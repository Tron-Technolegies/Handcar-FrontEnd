import React from "react";
import BrandCard from "./BrandCard";

const brands = [
  {
    img: "/spareparts/brand-1.png",
    alt: "Denso logo - Spare Parts Partner | Popular Auto Parts Abu Dhabi",
  },
  {
    img: "/spareparts/brand-2.png",
    alt: "Elring logo - Spare Parts Partner | Car Spare Parts Abu Dhabi",
  },
  {
    img: "/spareparts/brand-3.png",
    alt: "Motul logo - Spare Parts Partner | Car Spare Parts Abu Dhabi",
  },
  {
    img: "/spareparts/brand-4.png",
    alt: "Fuchs logo - Spare Parts Partner | Popular Auto Parts Abu Dhabi",
  },
  {
    img: "/spareparts/brand-5.png",
    alt: "Total logo - Spare Parts Partner | Car Spare Parts Abu Dhabi",
  },
  {
    img: "/spareparts/brand-6.png",
    alt: "Brembo logo - Spare Parts Partner | Car Spare Parts Abu Dhabi",
  },
  {
    img: "/spareparts/brand-7.png",
    alt: "KYB logo - World Class Shocks & Struts | Car Service Subscription",
  },
  { img: "/spareparts/brand-8.png", alt: "Generic Auto Brand - Spare Parts Partner" }, // Replace with actual brand name
];

export default function SparePartsBrands() {
  return (
    <div className="lg:px-[120px] px-10 py-10 flex flex-col gap-10 items-center">
      <h1 className="md:text-4xl text-2xl font-semibold">Find spare parts from top brands</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 gap-y-5 w-full place-items-center">
        {brands.map((brand, index) => (
          <BrandCard key={index} img={brand.img} alt={brand.alt} />
        ))}
      </div>
      {/* <button className="px-4 py-2 border rounded-lg border-black">
        See More Brands
      </button> */}
    </div>
  );
}

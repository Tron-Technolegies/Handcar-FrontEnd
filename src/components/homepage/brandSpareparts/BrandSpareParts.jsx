import React from "react";
import "../brandSpareparts/BrandSpareParts.css";
import topbrand_spare_parts from "../../../assets/topbrand_spare_parts.png";
import { handleEnquiry } from "../../../utils/WhatsApp";
// import WhatsApp from "../../../utils/WhatsApp"; // Correctly import WhatsApp component

const BrandSpareParts = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center bg-[#F5F5F7] lg:px-[120px] px-10 py-10">
      <div className="flex flex-col md:gap-10 gap-5 lg:max-w-[500px]">
        <h3 className="md:text-4xl text-2xl font-bold">
          Find the Best Car Spare Parts From Top Brands
        </h3>
        <p className="md:text-xl text-lg font-semibold">
          Discover a World of Car Accessories Tailored for Every Style and Need.
        </p>
        <button
          className="px-4 py-2 rounded-lg bg-[#D60205] w-fit text-white"
          onClick={() =>
            handleEnquiry({
              name: `I would like to find the best spare parts from top brands`,
            })
          }
        >
          Discover
        </button>
      </div>
      <div>
        <img
          src={topbrand_spare_parts}
          className="sm:max-w-[450px] sm:max-h-[337px] w-[300px] h-[225px]"
        ></img>
      </div>
    </div>
  );
};

export default BrandSpareParts;

import React from "react";
import "../carAccessoriesList/CarAccessoriesList.css";
import AccessoriesElt from "./AccessoriesElt";

const CarAccessoriesList = () => {
  return (
    <div className="lg:px-[120px] py-10 px-10">
      <div className="flex lg:flex-row flex-col justify-between gap-3 lg:items-center my-5">
        <h1 className="md:text-3xl text-xl font-semibold">
          Discover Car Accessories From Top Brands
        </h1>
        <button className="px-4 py-2 rounded-lg bg-[#DB1215] text-white w-fit">
          View all Products
        </button>
      </div>
      <div className="listof_top_deal_products">
        <AccessoriesElt />
        <AccessoriesElt />
        <AccessoriesElt />
        <AccessoriesElt />
      </div>
    </div>
  );
};

export default CarAccessoriesList;

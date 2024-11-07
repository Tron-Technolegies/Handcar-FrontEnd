import React from "react";
import FilterBox from "../components/accessoriespage/FilterBox/FilterBox";
import ProductSection from "../components/accessoriespage/MainSection/ProductSection";

const AccessoriesPage = () => {
  return (
    <div className="flex">
      <FilterBox />
      <ProductSection />
    </div>
  );
};

export default AccessoriesPage;

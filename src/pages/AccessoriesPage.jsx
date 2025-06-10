import React from "react";
import FilterBox from "../components/accessoriespage/FilterBox/FilterBox";
import ProductSection from "../components/accessoriespage/MainSection/ProductSection";
import useGetAllBrands from "../hooks/products/useGetAllBrands";
import useGetAllCategories from "../hooks/products/useGetAllCategories";
import Loading from "../components/Loading";

const AccessoriesPage = () => {
  const { brands, loading: brandLoading } = useGetAllBrands();
  const { categories, loading: categoryLoading } = useGetAllCategories();
  return (
    <div className="flex">
      {brandLoading || categoryLoading ? (
        <Loading />
      ) : (
        <FilterBox brands={brands} categories={categories} />
      )}
      {categoryLoading ? (
        <Loading />
      ) : (
        <ProductSection categories={categories} />
      )}
    </div>
  );
};

export default AccessoriesPage;

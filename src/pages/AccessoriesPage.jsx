import React, { useContext, useEffect } from "react";
import FilterBox from "../components/accessoriespage/FilterBox/FilterBox";
import ProductSection from "../components/accessoriespage/MainSection/ProductSection";
import useGetAllBrands from "../hooks/products/useGetAllBrands";
import useGetAllCategories from "../hooks/products/useGetAllCategories";
import Loading from "../components/Loading";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import { ProductContext } from "../ProductContext";

const AccessoriesPage = () => {
  const { brands, loading: brandLoading } = useGetAllBrands();
  const { categories, loading: categoryLoading } = useGetAllCategories();
  const {
    search,
    category,
    brand,
    min_price,
    max_price,
    sort,
    refetchTrigger,
  } = useContext(ProductContext);
  const { loading, products, refetch } = useGetAllProducts({
    search: search || "",
    category: category.join(",") || "",
    brand: brand.join(",") || "",
    min_price: min_price,
    max_price: max_price,
    sort: sort || "",
  });

  useEffect(() => {
    refetch();
  }, [refetchTrigger]);
  return (
    <div className="flex">
      {brandLoading || categoryLoading ? (
        <Loading />
      ) : (
        <FilterBox brands={brands} categories={categories} />
      )}
      {categoryLoading || loading ? (
        <Loading />
      ) : (
        <ProductSection
          categories={categories}
          brands={brands}
          loading={loading}
          products={products}
        />
      )}
    </div>
  );
};

export default AccessoriesPage;

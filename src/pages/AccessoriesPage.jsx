import React, { useContext, useEffect } from "react";
import FilterBox from "../components/accessoriespage/FilterBox/FilterBox";
import ProductSection from "../components/accessoriespage/MainSection/ProductSection";
import useGetAllBrands from "../hooks/products/useGetAllBrands";
import useGetAllCategories from "../hooks/products/useGetAllCategories";
import Loading from "../components/Loading";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import { ProductContext } from "../ProductContext";
import { Helmet } from "react-helmet";
import AccessoriesContentSection from "../components/accessoriespage/ContentSection/AccessoriesContentSection";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 className="md:text-4xl text-2xl font-semibold m-8 text-center">Explore the Best Car Accessories in Abu Dhabi, UAE</h1>
    <div className="flex">
      
      <Helmet>
        <title>Best Car Accessories in Abu Dhabi, UAE | HandCar</title>
        <meta
          name="description"
          content="Find top car accessories in Abu Dhabi. From interior to exterior, get quality upgrades at HandCar – your trusted car accessories shop in Abu Dhabi."
        />
      </Helmet>
      
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
    <AccessoriesContentSection />
    </div>
  );
};

export default AccessoriesPage;
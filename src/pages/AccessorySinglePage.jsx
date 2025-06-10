import React from "react";
import SinglePageHeader from "../components/accessoriespage/singlePage/SinglePageHeader";
import SinglePageOverview from "../components/accessoriespage/singlePage/SinglePageOverview";
import SinglePageReview from "../components/accessoriespage/singlePage/SinglePageReview";
import SimilarProducts from "../components/accessoriespage/singlePage/SimilarProducts";
import useGetSingleProduct from "../hooks/products/useGetSingleProduct";
import Loading from "../components/Loading";

export default function AccessorySinglePage() {
  const { loading, product } = useGetSingleProduct();
  return loading ? (
    <Loading />
  ) : (
    <div>
      <SinglePageHeader />
      <SinglePageOverview />
      <SinglePageReview />
      <SimilarProducts />
    </div>
  );
}

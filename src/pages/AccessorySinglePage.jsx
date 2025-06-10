import React from "react";
import SinglePageHeader from "../components/accessoriespage/singlePage/SinglePageHeader";
import SinglePageOverview from "../components/accessoriespage/singlePage/SinglePageOverview";
import SinglePageReview from "../components/accessoriespage/singlePage/SinglePageReview";
import SimilarProducts from "../components/accessoriespage/singlePage/SimilarProducts";
import useGetSingleProduct from "../hooks/products/useGetSingleProduct";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

export default function AccessorySinglePage() {
  const { id } = useParams();
  const { loading, product } = useGetSingleProduct({ id });
  return loading ? (
    <Loading />
  ) : (
    <div>
      <SinglePageHeader product={product} />
      <SinglePageOverview product={product} />
      <SinglePageReview />
      <SimilarProducts />
    </div>
  );
}

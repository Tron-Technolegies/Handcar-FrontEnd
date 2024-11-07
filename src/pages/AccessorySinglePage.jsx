import React from "react";
import SinglePageHeader from "../components/accessoriespage/singlePage/SinglePageHeader";
import SinglePageOverview from "../components/accessoriespage/singlePage/SinglePageOverview";
import SinglePageReview from "../components/accessoriespage/singlePage/SinglePageReview";
import SimilarProducts from "../components/accessoriespage/singlePage/SimilarProducts";

export default function AccessorySinglePage() {
  return (
    <div>
      <SinglePageHeader />
      <SinglePageOverview />
      <SinglePageReview />
      <SimilarProducts />
    </div>
  );
}

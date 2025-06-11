import React, { useEffect, useState } from "react";
import SinglePageHeader from "../components/accessoriespage/singlePage/SinglePageHeader";
import SinglePageOverview from "../components/accessoriespage/singlePage/SinglePageOverview";
import SinglePageReview from "../components/accessoriespage/singlePage/SinglePageReview";
import SimilarProducts from "../components/accessoriespage/singlePage/SimilarProducts";
import useGetSingleProduct from "../hooks/products/useGetSingleProduct";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import useGetAllProducts from "../hooks/products/useGetAllProducts";

export default function AccessorySinglePage() {
  const { id } = useParams();
  const { loading, product } = useGetSingleProduct({ id });
  const { loading: similarLoading, products } = useGetAllProducts();
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    if (products) {
      const filtered = products.filter((item) => item.id !== id);
      setSimilar(filtered);
    }
  }, [products]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <SinglePageHeader product={product} />
      <SinglePageOverview product={product} />
      <SinglePageReview />
      {similarLoading ? <Loading /> : <SimilarProducts products={similar} />}
    </div>
  );
}

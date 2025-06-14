import React, { useContext, useEffect, useState } from "react";
import SinglePageHeader from "../components/accessoriespage/singlePage/SinglePageHeader";
import SinglePageOverview from "../components/accessoriespage/singlePage/SinglePageOverview";
import SinglePageReview from "../components/accessoriespage/singlePage/SinglePageReview";
import SimilarProducts from "../components/accessoriespage/singlePage/SimilarProducts";
import useGetSingleProduct from "../hooks/products/useGetSingleProduct";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import useGetAllProducts from "../hooks/products/useGetAllProducts";
import { ProductContext } from "../ProductContext";

export default function AccessorySinglePage() {
  const { id } = useParams();
  const { search, category, brand, min_price, max_price, sort } =
    useContext(ProductContext);
  const { loading, product } = useGetSingleProduct({ id });
  const { loading: similarLoading, products } = useGetAllProducts({
    search: search || "",
    category: category.join(",") || "",
    brand: brand.join(",") || "",
    min_price: min_price,
    max_price: max_price,
    sort: sort || "",
  });
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    if (products) {
      const filtered = products.filter(
        (item) => item.id.toString() !== id.toString()
      );
      setSimilar(filtered);
    }
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

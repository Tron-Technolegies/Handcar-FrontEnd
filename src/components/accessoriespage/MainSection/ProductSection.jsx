import React, { useState } from "react";
import ProductPageHeader from "./ProductPageHeader";
import ProductList from "./ProductList";
import SmallScreenFilter from "../FilterBox/SmallScreenFilter";
import SearchBox from "./SearchBox";

export default function ProductSection({
  categories,
  brands,
  loading,
  products,
}) {
  const [showSmallScreenFilter, setShowSmallScreenFilter] = useState(false);
  return (
    <div className="px-10 py-10 lg:w-5/6 w-full bg-[#F2F2F2] relative ">
      <SearchBox />
      <ProductPageHeader categories={categories} />
      <ProductList
        setShowSmallFilter={setShowSmallScreenFilter}
        loading={loading}
        products={products}
      />
      {showSmallScreenFilter && (
        <SmallScreenFilter
          setShowSmallFilter={setShowSmallScreenFilter}
          categories={categories}
          brands={brands}
        />
      )}
    </div>
  );
}

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
  page,
  setPage,
  totalPages,
}) {
  const [showSmallScreenFilter, setShowSmallScreenFilter] = useState(false);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="px-10 py-10 lg:w-5/6 w-full bg-[#F2F2F2] relative ">
      <SearchBox />
      <ProductPageHeader categories={categories} />
      <ProductList
        setShowSmallFilter={setShowSmallScreenFilter}
        loading={loading}
        products={products}
      />

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-600 text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

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

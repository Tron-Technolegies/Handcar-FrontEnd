import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { CiFilter } from "react-icons/ci";

import Loading from "../../Loading";
import { ProductContext } from "../../../ProductContext";

export default function ProductList({ setShowSmallFilter, loading, products }) {
  const { sort, setSort, refetchTrigger, setRefetchTrigger } =
    useContext(ProductContext);
  return (
    <div className="my-10">
      <div className="flex justify-between items-center">
        <p className="text-[#8F8F8F] md:text-xl text-sm font-bold">
          {products?.length} Results
        </p>
        <div className="flex md:gap-5 gap-1 items-center w-fit text-[#8F8F8F] md:text-base text-sm">
          <p className="w-auto">Sort&nbsp;By</p>
          <select
            className={`w-full py-1 px-3 rounded-lg text-[#8F8F8F] bg-transparent border border-gray-300 `}
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setRefetchTrigger(!refetchTrigger);
            }}
          >
            <option className="border-b py-1 border-gray-300" value={""}>
              {"Default"}
            </option>
            <option className="border-b py-1 border-gray-300" value={"asc"}>
              {"Low-High"}
            </option>
            <option className="border-b py-1 border-gray-300" value={"desc"}>
              {"High-Low"}
            </option>
          </select>
        </div>
      </div>
      <button
        className="flex gap-1 items-center my-5 lg:hidden"
        onClick={() => setShowSmallFilter(true)}
      >
        <span>
          <CiFilter />
        </span>
        Filter
      </button>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 place-items-center my-5">
          {products?.length > 0 &&
            products?.map((x) => (
              <div key={x.id}>
                <ProductCard
                  name={x.name}
                  brand={x.brand}
                  original_price={x.original_price}
                  discounted_price={x.discounted_price}
                  discount_percentage={x.discount_percentage}
                  id={x.id}
                  image={x.image}
                  rating={x.average_rating}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

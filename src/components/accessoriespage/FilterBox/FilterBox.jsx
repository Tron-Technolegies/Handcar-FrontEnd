import React, { useContext } from "react";

import FilterHeadingElt from "./FilterHeadingElt";
import FilterCheckbox from "./FilterCheckbox";
import StarElt from "./StarElt";
import { ProductContext } from "../../../ProductContext";

export default function FilterBox({ brands, categories, refetch }) {
  const {
    category,
    brand,
    setCategory,
    setBrand,
    min_price,
    max_price,
    setMin_price,
    setMax_price,
  } = useContext(ProductContext);
  const handleCategoryChange = (name, checked) => {
    if (checked) {
      setCategory((prev) => [...prev, name]);
    } else {
      setCategory((prev) => prev.filter((item) => item !== name));
    }
  };
  const handleBrandChange = (name, checked) => {
    if (checked) {
      setBrand((prev) => [...prev, name]);
    } else {
      setBrand((prev) => prev.filter((item) => item !== name));
    }
  };
  return (
    <div className="px-5 py-10 w-1/6 hidden lg:block">
      <FilterHeadingElt title={"Categories"} />
      <div className="flex flex-col gap-3">
        {categories?.length > 0 &&
          categories?.map((item) => (
            <FilterCheckbox
              name={item.name}
              key={item.id}
              checked={category.includes(item.name)}
              onChange={handleCategoryChange}
            />
          ))}
      </div>
      <FilterHeadingElt title={"Brand"} />
      <div className="flex flex-col gap-3">
        {brands?.length > 0 &&
          brands?.map((item) => (
            <FilterCheckbox
              key={item.id}
              name={item.name}
              checked={brand.includes(item.name)}
              onChange={handleBrandChange}
            />
          ))}
      </div>
      <FilterHeadingElt title={"Price AED"} />
      <div className="flex gap-3 items-center w-full">
        <input
          type="number"
          value={min_price}
          onChange={(e) => setMin_price(e.target.value)}
          className="border border-[#D1D1D1] w-1/3 p-2 rounded-lg"
        ></input>
        <p>TO</p>
        <input
          type="number"
          value={max_price}
          onChange={(e) => setMax_price(e.target.value)}
          className="border border-[#D1D1D1] w-1/3 p-2 rounded-lg"
        ></input>
      </div>
      {/* <FilterHeadingElt title={"New Arrival"} />
      <div className="flex flex-col gap-3">
        <FilterCheckbox name={"Last 7 days"} />
        <FilterCheckbox name={"Last 30 days"} />
        <FilterCheckbox name={"Last 60 days"} />
      </div> */}
      {/* <FilterHeadingElt title={"Rating"} />
      <div className="flex flex-col gap-3">
        <FilterCheckbox name={<StarElt star={1} nostar={4} />} />
        <FilterCheckbox name={<StarElt star={2} nostar={3} />} />
        <FilterCheckbox name={<StarElt star={3} nostar={2} />} />
        <FilterCheckbox name={<StarElt star={4} nostar={1} />} />
        <FilterCheckbox name={<StarElt star={5} nostar={0} />} />
      </div> */}
      <div className="flex flex-col gap-2 my-5">
        <button
          onClick={() => refetch()}
          className="px-4 py-1 bg-black text-white rounded-md"
        >
          Apply
        </button>
        <button
          onClick={() => {
            refetch();
            setBrand([]);
            setCategory([]);
            setMax_price(0);
            setMin_price(0);
          }}
          className="px-4 py-1 bg-gray-400 text-black rounded-md"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

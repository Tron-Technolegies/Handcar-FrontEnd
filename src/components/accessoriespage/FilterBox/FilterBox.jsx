import React from "react";

import FilterHeadingElt from "./FilterHeadingElt";
import FilterCheckbox from "./FilterCheckbox";
import StarElt from "./StarElt";

export default function FilterBox() {
  return (
    <div className="px-5 py-10 w-1/6 hidden lg:block">
      <FilterHeadingElt title={"Categories"} />
      <div className="flex flex-col gap-3">
        <FilterCheckbox name={"Category 1"} />
        <FilterCheckbox name={"Category 2"} />
        <FilterCheckbox name={"Category 3"} />
        <FilterCheckbox name={"Category 4"} />
        <FilterCheckbox name={"Category 5"} />
      </div>
      <FilterHeadingElt title={"Price AED"} />
      <div className="flex gap-3 items-center w-full">
        <input
          type="number"
          className="border border-[#D1D1D1] w-1/3 p-2 rounded-lg"
          defaultValue={0}
        ></input>
        <p>TO</p>
        <input
          type="number"
          className="border border-[#D1D1D1] w-1/3 p-2 rounded-lg"
          defaultValue={1000}
        ></input>
      </div>
      <FilterHeadingElt title={"Brand"} />
      <div className="flex flex-col gap-3">
        <FilterCheckbox name={"Brand 1"} />
        <FilterCheckbox name={"Brand 2"} />
        <FilterCheckbox name={"Brand 3"} />
        <FilterCheckbox name={"Brand 4"} />
        <FilterCheckbox name={"Brand 5"} />
      </div>
      <FilterHeadingElt title={"New Arrival"} />
      <div className="flex flex-col gap-3">
        <FilterCheckbox name={"Last 7 days"} />
        <FilterCheckbox name={"Last 30 days"} />
        <FilterCheckbox name={"Last 60 days"} />
      </div>
      <FilterHeadingElt title={"Rating"} />
      <div className="flex flex-col gap-3">
        <FilterCheckbox name={<StarElt star={1} nostar={4} />} />
        <FilterCheckbox name={<StarElt star={2} nostar={3} />} />
        <FilterCheckbox name={<StarElt star={3} nostar={2} />} />
        <FilterCheckbox name={<StarElt star={4} nostar={1} />} />
        <FilterCheckbox name={<StarElt star={5} nostar={0} />} />
      </div>
    </div>
  );
}

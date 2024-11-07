import React from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function FilterHeadingElt({ title }) {
  return (
    <p className="flex justify-between items-center my-5 font-semibold">
      {title}
      <span>
        <FaAngleDown />
      </span>
    </p>
  );
}

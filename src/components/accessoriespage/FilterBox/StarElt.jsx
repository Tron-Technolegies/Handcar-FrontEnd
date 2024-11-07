import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarElt({ star, nostar }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: star }).map((_, index) => (
        <p key={index} className="text-[#FFB800]">
          <FaStar />
        </p>
      ))}
      {Array.from({ length: nostar }).map((_, index) => (
        <p key={index} className="text-[#DADADA]">
          <FaStar />
        </p>
      ))}
    </div>
  );
}

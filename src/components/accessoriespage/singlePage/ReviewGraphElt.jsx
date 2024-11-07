import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewGraphElt({ clr, no, percent, bg }) {
  return (
    <div className="flex items-center gap-2">
      <p>{no}</p>
      <p className={` ${clr}`}>
        <FaStar />
      </p>
      <div className="flex">
        <div
          className={`h-[4px] w-[15px]  ${percent > 0 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 10 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 20 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 30 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 40 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 50 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 60 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 70 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 80 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
        <div
          className={`h-[4px] w-[15px]  ${percent > 90 ? bg : "bg-[#F3F4F8]"}`}
        ></div>
      </div>
      <p>{percent}%</p>
    </div>
  );
}

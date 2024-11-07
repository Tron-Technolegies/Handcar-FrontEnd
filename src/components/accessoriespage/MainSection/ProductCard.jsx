import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="bg-white p-5 flex flex-col gap-3 rounded-lg items-center border shadow-lg">
      <p className="p-2 rounded-full bg-[#F2F2F2] w-fit ms-auto">
        <CiHeart />
      </p>
      <img src="/accessories/product.png" className="w-[212px] h-[141px]"></img>
      <div className="flex justify-between w-full items-center">
        <p className="bg-[#FFE500] p-1 px-3 text-sm font-semibold text-[#322D00] rounded-md">
          BestSeller
        </p>
        <div className="flex gap-2 items-center p-1 rounded-md bg-[#F2F2F2]">
          <p className="text-[#FFB800]">
            <FaStar />
          </p>
          <p>4.0</p>
        </div>
      </div>
      <Link to={"/accessories/1"} className="font-medium">
        Bosch F002H60041 Front Brake Pad for Passenger Cars{" "}
      </Link>
      <p className="font-medium me-auto">(Set of 4)</p>
      <div className="flex gap-3 me-auto items-center">
        <p className="font-semibold">AED 120</p>
        <p className="font-medium text-[#959595] line-through">AED 199</p>
        <p className="text-[#17A600] font-bold text-xs">9% OFF</p>
      </div>
      <button className="flex items-center gap-3 border rounded-lg hover:bg-black hover:text-white border-[#BBBBBB] p-2 w-full justify-center">
        <span>Add to cart</span>
        <span>
          <BsCartPlus />
        </span>
      </button>
    </div>
  );
}

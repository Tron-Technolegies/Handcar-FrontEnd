import React from "react";
import top_deal_product_img from "../../../assets/top_deal_product_img.png";
import star_icon from "../../../assets/star_icon.png";
import open_star_icon from "../../../assets/open_star_icon.png";

export default function DealCard({ name, price, image }) {
  return (
    <div className="flex flex-col gap-5 items-center p-3 bg-white rounded-lg shadow-lg border">
      <div className="">
        <img src={image} className="object-cover w-28" alt="" srcset="" />
      </div>
      <div className="flex justify-between w-full items-center">
        <button className="bg-[#D50104] text-white p-2 rounded-md">
          Upto 60% OFF
        </button>
        <p className="text-[#D50104]">Deal of the day</p>
      </div>
      <div className="font-medium">
        <p>{name}</p>
      </div>
      <div className="flex gap-2 justify-start w-full">
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={open_star_icon} alt="" />
      </div>
      <div className="flex gap-3 w-full">
        <p className="font-semibold">AED {price}</p>
        <p className="text-[#959595] line-through">
          AED {parseInt(price) / 0.6}
        </p>
      </div>
    </div>
  );
}

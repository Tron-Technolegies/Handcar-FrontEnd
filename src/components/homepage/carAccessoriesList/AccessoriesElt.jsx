import React from "react";
import star_icon from "../../../assets/star_icon.png";
import open_star_icon from "../../../assets/open_star_icon.png";
import top_deal_product_img from "../../../assets/top_deal_product_img.png";
import topbrand_accessories from "../../../assets/topbrand_accessories.png";

export default function AccessoriesElt() {
  return (
    <div className="bg-[#FBFBFD] p-5 flex flex-col gap-4 items-center w-[300px] rounded-lg shadow-lg border">
      <img
        src={topbrand_accessories}
        className="max-w-[212px] max-h-[141px] object-cover"
        alt=""
        srcset=""
      />
      <p className="bg-[#FFE500] font-semibold p-2 rounded-md text-left me-auto">
        {" "}
        30% OFF
      </p>
      <p className="font-medium text-lg">
        Bosch F002H60041 Front Brake Pad for Passenger Cars <br /> (Set of 4)
      </p>
      <div className="flex gap-2 me-auto">
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={open_star_icon} alt="" />
      </div>
      <div className="flex gap-3 me-auto">
        <p className=" text-xl font-medium">AED120</p>
        <p className="text-[#959595] text-xl font-medium">AED 199</p>
      </div>
    </div>
  );
}

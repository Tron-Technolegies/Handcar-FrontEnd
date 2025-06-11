import React from "react";
import star_icon from "../../../assets/star_icon.png";
import open_star_icon from "../../../assets/open_star_icon.png";
import top_deal_product_img from "../../../assets/top_deal_product_img.png";
import topbrand_accessories from "../../../assets/topbrand_accessories.png";

export default function AccessoriesElt({ name, image, price }) {
  return (
    <div className="bg-[#FBFBFD] p-5 flex flex-col gap-4 items-center w-[300px] rounded-lg shadow-lg border">
      <img src={image} className="object-cover w-64 h-36" alt="" />
      <p className="bg-[#FFE500] font-semibold p-2 rounded-md text-left me-auto">
        {" "}
        30% OFF
      </p>
      <p className="font-medium text-lg">{name}</p>
      {/* <div className="flex gap-2 me-auto">
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={star_icon} alt="" srcset="" />
        <img src={open_star_icon} alt="" />
      </div> */}
      <div className="flex gap-3 me-auto">
        <p className=" text-xl font-medium">AED {price}</p>
        <p className="text-[#959595] text-xl font-medium line-through">
          AED {(parseInt(price) / 0.7).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

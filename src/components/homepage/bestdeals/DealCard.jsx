import React from "react";
import star_icon from "../../../assets/star_icon.png";
import open_star_icon from "../../../assets/open_star_icon.png";
import { Link } from "react-router-dom";

export default function DealCard({
  name,
  price,
  original_price,
  image,
  id,
  discount_percentage,
  max_discount
}) {
  return (
    <Link
      to={`/accessories/${id}`}
      className="flex flex-col gap-5 items-center p-3 bg-white rounded-lg shadow-lg border justify-between"
    >
      <div>
        <img src={image} className="object-cover w-64 h-36" alt={name} />
      </div>

      <div className="flex justify-between w-full items-center">
        <button className="bg-[#D50104] text-white p-2 rounded-md">
          Upto {max_discount}% OFF
        </button>
        <p className="text-[#D50104]">Deal of the day</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-medium text-left">
          <p>{name}</p>
        </div>

        <div className="flex gap-2 justify-start w-full">
          <img src={star_icon} alt="rating-star" />
          <img src={star_icon} alt="rating-star" />
          <img src={star_icon} alt="rating-star" />
          <img src={star_icon} alt="rating-star" />
          <img src={open_star_icon} alt="empty-star" />
        </div>

        <div className="flex gap-3 w-full">
          <p className="font-semibold">AED {price}</p>
          {discount_percentage > 0 && (
            <p className="text-[#959595] line-through">
              AED {original_price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

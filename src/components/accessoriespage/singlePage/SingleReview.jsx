import React from "react";
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

export default function SingleReview({ review }) {
  return (
    <div className="w-full flex flex-col gap-2 py-5 border-t">
      <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 sm:items-center items-start">
        <div className="flex gap-1 items-center sm:border-e sm:pe-4">
          <p className="bg-[#D9D9D9] rounded-full p-2 w-fit text-[#7C7C7C]">
            {review?.user?.slice(0, 1).toUpperCase()}
          </p>
          <p>{review?.user}</p>
        </div>
        {/* <div className="flex gap-1 items-center">
          <p className="bg-blue-500 rounded-full p-0 w-fit text-white">
            <TiTick />
          </p>
          <p>Verified Purchase</p>
        </div> */}
      </div>
      {/* <p>16 Feb, 2024</p> */}
      <div className="flex gap-1">
        {Array.from({ length: review?.rating }).map((_, index) => (
          <p key={index} className="text-[#FFB800]">
            <FaStar />
          </p>
        ))}
        {review?.rating < 5 &&
          Array.from({ length: 5 - review?.rating }).map((_, index) => (
            <p key={index} className="text-[#DADADA]">
              <FaStar />
            </p>
          ))}
      </div>
      {/* <div className="flex gap-1">
        <img
          src="/accessorySingle/review-img.jpg"
          className="w-[48px] h-[48px] rounded-lg"
        />
        <img
          src="/accessorySingle/review-img.jpg"
          className="w-[48px] h-[48px] rounded-lg"
        />
        <img
          src="/accessorySingle/review-img.jpg"
          className="w-[48px] h-[48px] rounded-lg"
        />
        <img
          src="/accessorySingle/review-img.jpg"
          className="w-[48px] h-[48px] rounded-lg"
        />
      </div> */}
      {/* <p className="font-medium">Nice perfume in affordable price</p> */}
      <p>{review?.comment}</p>
    </div>
  );
}

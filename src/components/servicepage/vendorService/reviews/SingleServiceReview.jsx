import React from "react";
import { FaStar } from "react-icons/fa6";

export default function SingleServiceReview({ username, comment, rating }) {
  return (
    <div className="w-full flex flex-col gap-2 py-5 border-t">
      <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 sm:items-center items-start">
        <div className="flex gap-1 items-center sm:border-e sm:pe-4">
          <p className="bg-[#D9D9D9] rounded-full h-10 w-10 flex justify-center items-center text-[#7C7C7C]">
            {username?.slice(0, 1).toUpperCase()}
          </p>
          <p>{username}</p>
        </div>
      </div>
      {/* <p>16 Feb, 2024</p> */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <p key={index} className="text-[#FFB800]">
            <FaStar />
          </p>
        ))}
        {rating < 5 &&
          Array.from({ length: 5 - rating }).map((_, index) => (
            <p key={index} className="text-[#DADADA]">
              <FaStar />
            </p>
          ))}
      </div>
      {/* <p className="font-medium">Nice perfume in affordable price</p> */}
      <p>{comment}</p>
    </div>
  );
}

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewGraphElt from "./ReviewGraphElt";
import SingleReview from "./SingleReview";
import WriteReview from "./WriteReview";

export default function SinglePageReview() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="lg:px-[120px] py-10 px-5">
        <div className="flex justify-between md:flex-row flex-col shadow-lg px-10 py-5 rounded-md border">
          <div className="md:w-1/2 w-full">
            <p className="text-xl font-semibold my-5">
              Product Ratings & Reviews
            </p>
            <p className="font-medium mb-10">
              Have a review about this product?
              <span
                onClick={() => setShowPopup(true)}
                className="text-[#4069D8] cursor-pointer"
              >
                {" "}
                Write here
              </span>
            </p>
            <div className="flex flex-col gap-2">
              <h5 className="text-3xl font-bold">4.0</h5>
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, index) => (
                  <p key={index} className="text-[#FFB800]">
                    <FaStar />
                  </p>
                ))}
                <p className="text-[#DADADA]">
                  <FaStar />
                </p>
              </div>
              <p className="text-[#A7A7A7]">Based on 210 reviews</p>
              <div>
                <ReviewGraphElt
                  no={5}
                  clr={"text-[#5DAB33]"}
                  percent={57}
                  bg={"bg-[#5DAB33]"}
                />
                <ReviewGraphElt
                  no={4}
                  clr={"text-[#8CAC35]"}
                  percent={41}
                  bg={"bg-[#8CAC35]"}
                />
                <ReviewGraphElt
                  no={3}
                  clr={"text-[#E9AE4C]"}
                  percent={36}
                  bg={"bg-[#E9AE4C]"}
                />
                <ReviewGraphElt
                  no={2}
                  clr={"text-[#E37343]"}
                  percent={16}
                  bg={"bg-[#E37343]"}
                />
                <ReviewGraphElt
                  no={1}
                  clr={"text-[#EE5E20]"}
                  percent={4}
                  bg={"bg-[#EE5E20]"}
                />
              </div>
            </div>
          </div>
          <div className="grow md:w-1/2 w-full">
            <h4 className="text-xl font-semibold my-5">313 Reviews</h4>
            <div>
              <SingleReview />
              <SingleReview />
            </div>
          </div>
        </div>
      </div>
      {showPopup && <WriteReview setShowPopup={setShowPopup} />}
    </>
  );
}

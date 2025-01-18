import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetServiceReviews from "../../../../hooks/vendorservices/useGetServiceReviews";
import Loading from "../../../Loading";
import ReviewGraphElt from "../../../accessoriespage/singlePage/ReviewGraphElt";
import { FaStar } from "react-icons/fa";
import SingleServiceReview from "./SingleServiceReview";
import WriteServiceReview from "./WriteServiceReview";

export default function ReviewSection() {
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const {
    loading: reviewLoading,
    reviews,
    refetch,
    oneStar,
    threeStar,
    twoStar,
    fiveStar,
    fourStar,
    avg,
  } = useGetServiceReviews({ id });
  return reviewLoading ? (
    <Loading />
  ) : (
    <div className="w-full">
      <div className="py-10">
        <div className="flex justify-between flex-col shadow-lg px-10 py-5 rounded-md border">
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
              <h5 className="text-3xl font-bold">{avg.toFixed(1)}</h5>
              <div className="flex gap-1">
                {Array.from({ length: Math.round(avg) }).map((_, index) => (
                  <p key={index} className="text-[#FFB800]">
                    <FaStar />
                  </p>
                ))}
                {avg < 5 &&
                  Array.from({ length: 5 - Math.round(avg) }).map(
                    (_, index) => (
                      <p key={index} className="text-[#DADADA]">
                        <FaStar />
                      </p>
                    )
                  )}
              </div>
              <p className="text-[#A7A7A7]">
                Based on {reviews.length} reviews
              </p>
              <div>
                <ReviewGraphElt
                  no={5}
                  clr={"text-[#5DAB33]"}
                  percent={((fiveStar.length / reviews.length) * 100).toFixed(
                    1
                  )}
                  bg={"bg-[#5DAB33]"}
                />
                <ReviewGraphElt
                  no={4}
                  clr={"text-[#8CAC35]"}
                  percent={((fourStar.length / reviews.length) * 100).toFixed(
                    1
                  )}
                  bg={"bg-[#8CAC35]"}
                />
                <ReviewGraphElt
                  no={3}
                  clr={"text-[#E9AE4C]"}
                  percent={((threeStar.length / reviews.length) * 100).toFixed(
                    1
                  )}
                  bg={"bg-[#E9AE4C]"}
                />
                <ReviewGraphElt
                  no={2}
                  clr={"text-[#E37343]"}
                  percent={((twoStar.length / reviews.length) * 100).toFixed(1)}
                  bg={"bg-[#E37343]"}
                />
                <ReviewGraphElt
                  no={1}
                  clr={"text-[#EE5E20]"}
                  percent={((oneStar.length / reviews.length) * 100).toFixed(1)}
                  bg={"bg-[#EE5E20]"}
                />
              </div>
            </div>
          </div>
          <div className="grow w-full">
            <h4 className="text-xl font-semibold my-5">
              {reviews.length} Reviews
            </h4>
            <div>
              {reviews.length > 0 &&
                reviews.map((x) => (
                  <SingleServiceReview
                    key={x.id}
                    username={x.username}
                    comment={x.comment}
                    rating={x.rating}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <WriteServiceReview
          setShowPopup={setShowPopup}
          service_id={id}
          refetch={refetch}
        />
      )}
    </div>
  );
}

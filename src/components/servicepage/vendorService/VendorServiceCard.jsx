import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function VendorServiceCard({ setShowPopup, data }) {
  return (
    <div className="bg-[#FBFBFD] p-3 shadow-lg rounded-lg max-w-[350px] flex flex-col gap-3 gap-y-5 font-semibold">
      <img
        src={data?.images[0] ? data?.images[0] : "/services/painting.png"}
        className="max-w-[330px] h-[200px] object-cover rounded-md"
      ></img>
      <div className=" flex justify-between items-center">
        <p className="text-lg">{data.vendor_name}</p>
        <p className="flex gap-2 items-center bg-[#F2F2F2] p-1 rounded-md">
          <span className="text-[#FFB800]">
            <FaStar />
          </span>
          <span className="text-sm">4.0</span>
        </p>
      </div>
      <p>{data.service_category}</p>
      <Link
        to={`/servicepage/${data.id}`}
        className="py-2 rounded-lg text-white bg-black text-center"
      >
        View Contact Details
      </Link>
    </div>
  );
}

import React from "react";
import { FaStar } from "react-icons/fa6";

export default function PaintingCard({ setShowPopup }) {
  return (
    <div className="bg-[#FBFBFD] p-3 rounded-lg max-w-[350px] flex flex-col gap-3 font-semibold">
      <img
        src="/services/painting.png"
        className="max-w-[330px] object-cover rounded-md"
      ></img>
      <div className=" flex justify-between items-center">
        <p className="text-lg ">ICON Rocklear Paint Solutions</p>
        <p className="flex gap-2 items-center bg-[#F2F2F2] p-1 rounded-md">
          <span className="text-[#FFB800]">
            <FaStar />
          </span>
          <span className="text-sm">4.0</span>
        </p>
      </div>
      <p className="max-w-[220px] text-sm">
        Redeem code to get contact details & 20% discount on service
      </p>
      <p>AED 99/hr</p>
      <button
        onClick={() => setShowPopup(true)}
        className="py-2 rounded-lg text-white bg-black"
      >
        View Contact Details
      </button>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function CheckOutSection() {
  return (
    <div className="bg-[#F5F5F5] p-5 lg:px-[120px] px-5 rounded-lg flex items-center flex-col gap-5">
      <p>Do you have any Coupon code ?</p>
      <div className="flex sm:flex-row flex-col w-full gap-2">
        <input
          type="text"
          className="grow rounded-lg p-2 px-4"
          placeholder="your code here"
        ></input>
        <button className="bg-[#505050] px-10 py-2 rounded-lg text-white hover:bg-black">
          Apply
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full my-5">
        <div className="flex justify-between items-center">
          <p className="text-[#979797]">Total</p>
          <p>AED 360.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#979797]">Delivery</p>
          <p>AED 20.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#979797]">Grand total</p>
          <p className="text-[#17A600] text-lg">AED 360.00</p>
        </div>
      </div>
      <Link
        to={"/address"}
        className="bg-[#505050] w-full text-center text-white py-2 rounded-lg"
      >
        CHECKOUT
      </Link>
    </div>
  );
}

import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import ItemInCart from "./ItemInCart";
import { Link } from "react-router-dom";

export default function AddressPageMainSection() {
  return (
    <div className="lg:px-[120px] pb-10 px-5 flex xl:flex-row flex-col gap-5">
      <div className="xl:w-2/3 w-full">
        <div>
          <h4 className="text-2xl font-semibold mb-5">
            Select a shipping address
          </h4>
          <div className="flex flex-col gap-5">
            <AddressCard active />
            <AddressCard />
          </div>
        </div>
        <AddressForm />
      </div>
      <div className="xl:w-1/3 w-full">
        <div className="flex flex-col gap-3 p-3 border rounded-xl shadow-md">
          <p className="text-xl font-semibold">Items in Cart</p>
          <ItemInCart />
          <ItemInCart />
          <ItemInCart />
          <div className="h-[1px] bg-black"></div>
          <div className="flex flex-col gap-3 text-lg">
            <div className="flex justify-between">
              <p className="text-[#979797]">Total</p>
              <p>AED 360.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#979797]">Delivery</p>
              <p>AED 20.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#979797]">Grand total</p>
              <p className="text-[#17A600] font-semibold">AED 360.00</p>
            </div>
          </div>
          <Link
            to={"/confirm"}
            className="px-4 py-2 text-center border hover:bg-white hover:text-black rounded-lg bg-black text-white"
          >
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}

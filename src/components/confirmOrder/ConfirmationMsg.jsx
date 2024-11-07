import React from "react";
import { Link } from "react-router-dom";

export default function ConfirmationMsg() {
  return (
    <div className="md:w-3/5 w-full shadow-md p-5 h-fit rounded-lg flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <img src="/cart/confirm.png"></img>
        <h4 className="text-2xl font-semibold">Your Order is Confirmed!</h4>
        <p className="font-medium text-center">
          We will be sending the tracking information on your email address
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center font-semibold text-sm">
        <p>Estimated Delivery:</p>
        <p className="text-[#17A600]">Nov 6, 2024 - Nov 8, 2024</p>
      </div>
      <Link className="w-full text-center shadow-md px-4 py-2 rounded-lg bg-black text-white border hover:bg-white hover:text-black">
        Continue Shoping
      </Link>
    </div>
  );
}

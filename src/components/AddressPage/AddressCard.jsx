import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";

export default function AddressCard({ active }) {
  return (
    <div
      className={`flex gap-3 items-start max-w-[340px] p-5 border border-black rounded-xl shadow-lg ${
        !active && "bg-[#F8F8F8] border-0"
      }`}
    >
      <p>{active ? <FaRegCircleDot /> : <FaRegCircle />}</p>
      <div>
        <p>Ahmed Al-Farsi </p>
        <p>123 Sheikh Zayed Road,</p>
        <p>Downtown Dubai,</p>
        <p>Dubai, United Arab Emirates</p>
        <p>P.O. Box 12345,</p>
        <p>Mobile: +971 50 123 4567</p>
      </div>
    </div>
  );
}

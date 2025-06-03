import React from "react";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";

export default function AddressCard({
  active,
  name,
  ad1,
  ad2,
  state,
  zip,
  country,
}) {
  return (
    <div
      className={`flex gap-3 items-start max-w-[340px] p-5 border border-black rounded-xl shadow-lg ${
        !active && "bg-[#F8F8F8] border-0"
      }`}
    >
      <p>{active ? <FaRegCircleDot /> : <FaRegCircle />}</p>
      <div>
        <p>{name}</p>
        <p>{ad1}</p>
        <p>{ad2}</p>
        <p>{state}</p>
        <p>{country}</p>
        <p>{zip}</p>
        <p>Mobile: +971 50 123 4567</p>
      </div>
    </div>
  );
}

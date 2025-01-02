import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CouponItem({ percent, name, code }) {
  return (
    <div className="rounded-lg p-5 flex flex-col gap-5 border shadow-md mx-2">
      <div>
        <h4 className="text-xl font-semibold">{percent} OFF</h4>
        <p className="font-medium">{name}</p>
      </div>
      <div className="flex sm:flex-row flex-col gap-5 text-sm">
        <p className="">Code: {code}</p>
        <p className="flex items-center gap-2">
          <span>
            <MdContentCopy />
          </span>
          Copy
        </p>
        <p className="flex items-center gap-2">
          <span>
            <FaArrowRightLong />
          </span>
          Apply
        </p>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { MdContentCopy } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { CartContext } from "../../CartContext";

export default function CouponItem({ coupon }) {
  const { coupon: cartCoupon, setCoupon, setApplied } = useContext(CartContext);
  return (
    <div className="rounded-lg p-5 flex flex-col gap-5 border shadow-md mx-2">
      <div>
        <h4 className="text-xl font-semibold">
          {coupon?.discount_percentage} OFF
        </h4>
        <p className="font-medium">{coupon?.name}</p>
      </div>
      <div className="flex sm:flex-row flex-col gap-5 text-sm">
        <p className="">Code: {coupon?.coupon_code}</p>
        {/* <p className="flex items-center gap-2">
          <span>
            <MdContentCopy />
          </span>
          Copy
        </p> */}
        <p
          className="flex items-center gap-2"
          onClick={() => {
            setCoupon(coupon);
            setApplied(true);
          }}
        >
          <span>
            <FaArrowRightLong />
          </span>
          {coupon?.id === cartCoupon?.id ? "Applied" : "Apply"}
        </p>
      </div>
    </div>
  );
}

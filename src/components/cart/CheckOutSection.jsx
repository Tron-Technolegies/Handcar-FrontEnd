import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { toast } from "react-toastify";

export default function CheckOutSection({ price, coupons }) {
  const { coupon, applied, setApplied, setCoupon } = useContext(CartContext);
  const [code, setCode] = useState(coupon?.coupon_code || "");

  const [total, setTotal] = useState(price + 20 || 0);
  const applyCode = () => {
    const isApplicable = coupons?.map((item) => item.coupon_code);
    console.log(isApplicable);
    if (!isApplicable.includes(code)) {
      toast.error("Invalid Coupon Code");
      return;
    } else {
      const newCoupon = coupons.find((item) => item.coupon_code === code);
      console.log(newCoupon);

      setCoupon(newCoupon);
      setApplied(true);
    }
  };

  useEffect(() => {
    if (coupon) {
      setCode(coupon.coupon_code);
    }
  }, [coupon]);

  return (
    <div className="bg-[#F5F5F5] p-5 lg:px-[120px] px-5 rounded-lg flex items-center flex-col gap-5">
      <p>Do you have any Coupon code ?</p>
      <div className="flex sm:flex-row flex-col w-full gap-2">
        <input
          type="text"
          className="grow rounded-lg p-2 px-4"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="your code here"
        ></input>
        <button
          onClick={applyCode}
          className="bg-[#505050] px-10 py-2 rounded-lg text-white hover:bg-black"
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full my-5">
        <div className="flex justify-between items-center">
          <p className="text-[#979797]">Total</p>
          <p>AED {price}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#979797]">Delivery</p>
          <p>AED 20.00</p>
        </div>
        {applied && (
          <div className="flex justify-between items-center">
            <p className="text-[#979797]">Discount</p>
            <p>AED {price * (parseInt(coupon?.discount_percentage) / 100)}</p>
          </div>
        )}
        <div className="flex justify-between items-center">
          <p className="text-[#979797]">Grand total</p>
          <p className="text-[#17A600] text-lg">
            {applied
              ? `AED ${
                  total - price * (parseInt(coupon?.discount_percentage) / 100)
                }`
              : `AED ${total}`}
          </p>
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

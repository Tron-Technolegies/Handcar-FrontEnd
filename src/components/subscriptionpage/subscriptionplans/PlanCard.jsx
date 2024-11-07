import { motion } from "framer-motion";
import React from "react";

export default function PlanCard({ name, price, list, popular }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }} // Start with opacity 0 and scale 50% of original size
      animate={{ opacity: 1, scale: 1 }} // Fade in and scale to 100%
      transition={{
        opacity: { duration: 1 }, // Duration for the fade-in
        scale: { duration: 1, ease: "easeOut" }, // Duration and easing for the scale-in
      }}
      className="w-[310px] bg-white py-3 px-4 rounded-lg flex flex-col justify-between min-h-[600px] items-center shadow-md"
    >
      <div className="flex flex-col gap-5">
        <div className="flex justify-between w-full pt-5">
          <h5 className="text-xl font-bold">{name}</h5>
          {popular && (
            <p className="flex gap-1 items-center text-[#775600] p-1 rounded-md bg-[#FFE500] text-sm">
              <img src="/subs/star.png"></img> popular
            </p>
          )}
        </div>
        <h4 className="text-3xl font-bold">
          {`AED ${price} `}
          <span className="text-sm font-medium"> /month</span>
        </h4>
        <div className="flex flex-col gap-3">
          {list.map((x, index) => (
            <p key={index} className="flex gap-5 items-start">
              <img src="/subs/tick.png"></img>
              {x}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="bg-[#F7F7F7] rounded-lg p-3 w-full flex flex-col gap-7">
          <p className="font-bold">Multiple Cars Discount</p>
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-3">
              <p className="bg-[#1D9112] w-[25px] h-[25px] flex justify-center items-center text-sm text-white rounded-full">
                1
              </p>
              <p>Car plan</p>
            </div>
            <p>Full Price</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-3">
              <p className="bg-[#1D9112] w-[25px] h-[25px] flex justify-center items-center text-sm text-white rounded-full">
                2
              </p>
              <p>Car plan</p>
            </div>
            <p>10% off/Car</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-3">
              <p className="bg-[#1D9112] w-[25px] h-[25px] flex justify-center items-center text-sm text-white rounded-full">
                3
              </p>
              <p>Car plan</p>
            </div>
            <p>20% off/Car</p>
          </div>
        </div>
        <button className="px-4 py-2 border border-black rounded-lg font-medium hover:bg-black hover:text-white">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
}

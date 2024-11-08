import { motion } from "framer-motion";
import React from "react";
import FormInput from "../FormInput";

export default function OTPLogin({ setShowOtpLogin, setShowEnterOtp }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowOtpLogin(false)}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto flex flex-col gap-5 items-center bg-white border border-[#A5A5A5] py-5"
      >
        <img src="/logo.png" className="w-[49px] h-[55px]"></img>
        <div className="p-5 flex flex-col gap-7">
          <h4 className="text-xl font-semibold">
            Login or signup with email or mobile number
          </h4>
          <FormInput type={"text"} placeholder={"Enter mobile number/email"} />
          <button
            className="px-5 py-3 bg-black rounded-lg w-full text-white font-semibold"
            onClick={() => {
              setShowOtpLogin(false);
              setShowEnterOtp(true);
            }}
          >
            Generate OTP
          </button>
        </div>
        <div className="w-full px-10 flex flex-col items-center">
          <p>By clicking through, I agree with the</p>
          <p className="text-[#4F7FE7] underline">
            Terms & Conditions{" "}
            <span className="text-black no-underline">and</span> Privacy Policy
          </p>
        </div>
        <button
          onClick={() => setShowOtpLogin(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
}

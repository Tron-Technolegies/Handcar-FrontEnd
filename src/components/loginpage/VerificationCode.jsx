import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { motion } from "framer-motion";

export default function VerificationCode() {
  const { setShowVerification, setShowNewPassword } = useContext(UserContext);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if value is not empty and is a digit
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowVerification(false)}
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
        <div className="p-5 flex flex-col gap-7 w-full">
          <h4 className="text-xl font-semibold text-center">Verification</h4>
          <p className="text-center">
            Enter your 4 digits code that you received on your email.
          </p>
          <div className="flex justify-center items-center gap-5">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="border rounded-lg p-3 w-[50px]"
              />
            ))}
          </div>
          <button
            className="px-5 py-3 bg-black rounded-lg w-full text-white font-semibold"
            onClick={() => {
              setShowNewPassword(true);
              setShowVerification(false);
            }}
          >
            VERIFY
          </button>
          <p className="text-center text-xs">
            If you didn’t receive a code!{" "}
            <span className="text-[#F2451C] cursor-pointer">Resend</span>
          </p>
        </div>
        {/* <div className="w-full px-10 flex flex-col items-center">
          <p>By clicking through, I agree with the</p>
          <p className="text-[#4F7FE7] underline">
            Terms & Conditions{" "}
            <span className="text-black no-underline">and</span> Privacy Policy
          </p>
        </div> */}
        <button
          onClick={() => {
            setShowVerification(false);
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
}

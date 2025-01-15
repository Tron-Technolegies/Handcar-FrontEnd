import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import FormInput from "../FormInput";

export default function NewPassword() {
  const { setShowNewPassword } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowNewPassword(false)}
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
        <div className="w-full px-10 flex flex-col gap-5">
          <h4 className="text-xl text-center font-semibold">
            Set New Password
          </h4>
          <p className="text-center">
            Set the new password for your account so you can login and access
            all featuress.
          </p>
          <FormInput
            placeholder={"Enter new Password"}
            type={"password"}
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            placeholder={"Confirm new Password"}
            type={"password"}
            value={confirmPassword}
            onchange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="w-full px-10 flex flex-col gap-3 items-center">
          <button
            className="px-5 py-3 bg-[#DB1215] rounded-lg w-full text-white font-semibold"
            onClick={() => {
              setShowNewPassword(false);
            }}
          >
            UPDATE
          </button>
        </div>
        {/* <div className="w-full px-10 flex flex-col items-center">
          <p>By clicking through, I agree with the</p>
          <p className="text-[#4F7FE7] underline">
            Terms & Conditions{" "}
            <span className="text-black no-underline">and</span> Privacy Policy
          </p>
        </div> */}
        <button
          onClick={() => setShowForgotPassword(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
}

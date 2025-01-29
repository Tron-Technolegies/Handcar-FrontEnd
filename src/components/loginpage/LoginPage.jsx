import React, { useContext, useState } from "react";
import FormInput from "../FormInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import useLoginWithPassword from "../../hooks/auth/useLoginWithPassword";
import { UserContext } from "../../UserContext";
import Loading from "../Loading";
import useGetUserDetails from "../../hooks/auth/useGetUserDetails";

export default function LoginPage() {
  const {
    setShowLogin,
    setShowSignup,
    setShowOtpLogin,
    setShowForgotPassword,
  } = useContext(UserContext);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { loading, loginUser } = useLoginWithPassword();
  const { refetch } = useGetUserDetails();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowLogin(false)}
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
        <div className="flex w-full">
          <button className="w-1/2 py-3 text-lg font-semibold border-b-4 border-[#DB1215]">
            LOGIN
          </button>
          <button
            className="w-1/2 py-3 text-lg font-semibold"
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="w-full px-10 flex flex-col gap-5">
          <p>Phone</p>
          <PhoneInput
            country={"ae"} // Set default country code (UAE in this case)
            value={phone}
            onChange={setPhone}
            inputStyle={{
              padding: "20px",
              paddingLeft: "40px",
              width: "100%",
              borderColor: "#E1E1E1",
              backgroundColor: "#E1E1E1",
              borderRadius: "8px",
            }}
          />
          <FormInput
            placeholder={"Password"}
            type={"password"}
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
          <p
            className="text-end text-[#4F7FE7] cursor-pointer"
            onClick={() => {
              setShowLogin(false);
              setShowForgotPassword(true);
            }}
          >
            Forgot Password?
          </p>
        </div>
        <div className="w-full px-10 flex flex-col gap-3 items-center">
          <button
            className="px-5 py-3 bg-[#DB1215] rounded-lg w-full text-white font-semibold"
            onClick={async () => {
              await loginUser({ phone, password });
              refetch();
            }}
          >
            Login with Password
          </button>
          {loading && <Loading />}
          <p className="font-semibold">OR</p>
          <button
            className="px-5 py-3 bg-[#E1E1E1] rounded-lg w-full font-semibold"
            onClick={() => {
              setShowLogin(false);
              setShowOtpLogin(true);
            }}
          >
            Login with OTP
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
          onClick={() => setShowLogin(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
}

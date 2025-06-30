import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useVerifyOTP = () => {
  const [loading, setLoading] = useState(false);

  const verifyCode = async ({ otp, email }) => {
    setLoading(true);
    const newOtp = parseInt(otp.join(""));
    try {
      const response = await axios.post(
        `${base_url}/verify_otp_forget_password`,
        { email, otp: newOtp },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("OTP Verified Successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    }
  };
  return { loading, verifyCode };
};

export default useVerifyOTP;

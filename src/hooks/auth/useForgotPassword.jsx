import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const forgotPassword = async ({ email }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/send_otp_forget_password`,
        { email },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("OTP has been send to mail id");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    }
  };

  return { loading, forgotPassword };
};

export default useForgotPassword;

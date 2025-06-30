import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";
import { UserContext } from "../../UserContext";

const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const { setForgotPasswordEmail } = useContext(UserContext);
  const updatePassword = async ({ new_password, confirm_password, email }) => {
    setLoading(true);
    if (new_password === confirm_password) {
      toast.error("Passwords doesnt match");
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/reset_password_with_otp`,
        {
          new_password,
          confirm_password,
          email,
        },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("Password updated successfully");
      setForgotPasswordEmail("");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    }
  };
  return { loading, updatePassword };
};

export default useUpdatePassword;

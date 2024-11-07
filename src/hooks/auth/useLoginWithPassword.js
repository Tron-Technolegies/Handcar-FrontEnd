import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";

const useLoginWithPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async ({ phone, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/login/password`,
        { phone, password },
        { withCredentials: true }
      );
      console.log(res);

      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loginUser, loading };
};

export default useLoginWithPassword;

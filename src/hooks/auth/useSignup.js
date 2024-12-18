import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async ({ name, email, phone, password }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/signup`, {
        name,
        email,
        phone,
        password,
      });
      const data = res.data;
      toast.success("successfully logged in");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, signUp };
};

export default useSignup;

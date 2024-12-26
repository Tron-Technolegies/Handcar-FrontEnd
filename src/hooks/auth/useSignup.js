import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";
import { UserContext } from "../../UserContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setShowSignup } = useContext(UserContext);

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
      toast.success("successfully registered");
      navigate("/");
      setShowSignup(false);
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

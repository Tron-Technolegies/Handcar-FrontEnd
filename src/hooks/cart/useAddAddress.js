import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useAddAddress = () => {
  const [loading, setLoading] = useState(false);

  const addAddress = async ({
    name,
    ad1,
    ad2,
    state,
    zip,
    country,
    phone,
    id,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", {
        name,
        ad1,
        ad2,
        state,
        zip,
        country,
        phone,
      });
      const data = res.data;
      toast.success("Address added successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addAddress };
};

export default useAddAddress;

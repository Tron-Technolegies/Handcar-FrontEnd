import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useRemoveCartItems = () => {
  const [loading, setLoading] = useState(false);

  const removeCartItem = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/removecart/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, removeCartItem };
};

export default useRemoveCartItems;

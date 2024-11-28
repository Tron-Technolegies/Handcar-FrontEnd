import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useUpdateItemInCart = () => {
  const [loading, setLoading] = useState(false);

  const updateItemInCart = async ({ id, no }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", { id, no });
      const data = res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    }
  };
  return { loading, updateItemInCart };
};

export default useUpdateItemInCart;

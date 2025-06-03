import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useUpdateItemInCart = () => {
  const [loading, setLoading] = useState(false);

  const updateItemInCart = async ({ id, no }) => {
    setLoading(true);

    try {
      const res = await axios.put(
        `${base_url}/update_cart/${id}/`,
        { quantity: no },
        {
          withCredentials: true,
        }
      );
      const data = res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateItemInCart };
};

export default useUpdateItemInCart;

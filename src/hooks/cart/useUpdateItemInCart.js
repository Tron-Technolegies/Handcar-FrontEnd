import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useUpdateItemInCart = () => {
  const [loading, setLoading] = useState(false);

  const updateItemInCart = async ({ id, no }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("cart_item_id", id);
    formData.append("quantity", no);
    try {
      const res = await axios.put(`${base_url}/update_cart/${id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
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
  return { loading, updateItemInCart };
};

export default useUpdateItemInCart;

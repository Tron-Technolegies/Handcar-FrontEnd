import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useRemoveWishListItem = () => {
  const [loading, setLoading] = useState(false);

  const removeWishListItem = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/remove_wishlist/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      toast.success("Item successfully removed");
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
  return { loading, removeWishListItem };
};

export default useRemoveWishListItem;

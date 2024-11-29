import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useRemoveWishListItem = () => {
  const [loading, setLoading] = useState(false);

  const removeWishListItem = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url");
      const data = res.data;
      toast.success("Item successfully removed");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, removeWishListItem };
};

export default useRemoveWishListItem;

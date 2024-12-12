import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddItemtoWishList = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addItemtoWishList = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.post(`${base_url}/wishlist/add/${id}/`);
      const data = res.data;
      navigate("/wishlist");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addItemtoWishList };
};

export default useAddItemtoWishList;

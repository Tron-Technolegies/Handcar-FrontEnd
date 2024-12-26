import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddItemtoCart = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addItemToCart = async ({ id }) => {
    const product_id = id;
    setLoading(true);
    const formdata = new FormData();
    formdata.append("product_id", product_id);
    try {
      const res = await axios.post(
        `${base_url}/add_to_cart/${product_id}/`,
        formdata,
        { withCredentials: true }
      );

      const data = res.data;
      navigate("/cart");
    } catch (err) {
      console.log(err);
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addItemToCart };
};

export default useAddItemtoCart;

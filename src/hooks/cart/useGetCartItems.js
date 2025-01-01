import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetCartItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState();

  const getCartItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/display_cart`, {
        withCredentials: true,
      });
      const data = res.data;
      setItems(data.cart_items);
      setPrice(data.total_price);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCartItems();
  }, []);

  return { loading, items, price };
};

export default useGetCartItems;

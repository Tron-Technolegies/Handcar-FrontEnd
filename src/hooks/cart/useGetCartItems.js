import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";
import { CartContext } from "../../CartContext";

const useGetCartItems = () => {
  const [loading, setLoading] = useState(false);
  const { setCartItems, setTotalPrice } = useContext(CartContext);
  const getCartItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/display_cart`, {
        withCredentials: true,
      });
      const data = res.data;
      setCartItems(data.cart_items);
      setTotalPrice(data.total_price);
    } catch (err) {
      console.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCartItems();
  }, []);

  const refetch = () => {
    getCartItems();
  };

  return { loading, refetch };
};

export default useGetCartItems;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetCartItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getCartItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setItems(data.items);
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

  return { loading, items };
};

export default useGetCartItems;

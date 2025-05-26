import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const usePromotedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getPromotedProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url", { withCredentials: true });
      const data = res.data;
      setProducts(data.products);
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    }
  };
  useEffect(() => {
    getPromotedProducts();
  }, []);

  return { loading, products };
};

export default usePromotedProducts;

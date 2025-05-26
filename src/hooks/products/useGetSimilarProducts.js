import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSimilarProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getSimilarProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url", { withCredentials: true });
      const data = res.data;
      setProducts(data.products);
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
    getSimilarProducts();
  }, []);

  return { loading, products };
};

export default useGetSimilarProducts;

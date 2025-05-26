import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSingleProduct = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url", { withCredentials: true });
      const data = res.data;
      setProduct(data.product);
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
    getSingleProduct();
  }, []);
  return { loading, product };
};

export default useGetSingleProduct;

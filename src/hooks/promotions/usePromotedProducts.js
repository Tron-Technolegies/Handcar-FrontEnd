import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const usePromotedProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [maxDiscount, setMaxDiscount] = useState(0); 

  const getPromotedProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_promoted_products`, {
        withCredentials: true,
      });
      const data = res.data;

    
      setProducts(data.promoted_products);
      setMaxDiscount(data.max_discount || 0);
    } catch (err) {
      console.log(
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
    getPromotedProducts();
  }, []);

  return { loading, products, maxDiscount };
};

export default usePromotedProducts;

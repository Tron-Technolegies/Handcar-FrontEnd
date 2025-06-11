import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetPromotedBrandProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getPromotedBrandProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/promoted_brands_products'`, {
        withCredentials: true,
      });
      const data = res.data;
      setProducts(data.promoted_brands_products);
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
    getPromotedBrandProducts();
  }, []);

  return { loading, products };
};

export default useGetPromotedBrandProducts;

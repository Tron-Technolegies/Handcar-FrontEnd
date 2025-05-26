import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_products`, {
        withCredentials: true,
      });
      const data = res.data;
      setProducts(data.product);
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
    getAllProducts();
  }, []);

  return { loading, products };
};

export default useGetAllProducts;

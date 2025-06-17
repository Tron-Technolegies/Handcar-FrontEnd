import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetSingleProduct = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_product/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setProduct(data);
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

  const refetch = () => {
    getSingleProduct();
  };
  return { loading, product, refetch };
};

export default useGetSingleProduct;

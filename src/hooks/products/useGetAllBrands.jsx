import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetAllBrands = () => {
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);

  const getAllBrands = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/view_brand`, {
        withCredentials: true,
      });
      const data = response.data;
      setBrands(data.brands);
    } catch (error) {
      console.log(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.error ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllBrands;
  }, []);

  return { loading, brands };
};

export default useGetAllBrands;

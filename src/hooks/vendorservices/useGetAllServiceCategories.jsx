import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetAllServiceCategories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_service_categories_user`, {
        withCredentials: true,
      });
      const data = res.data;
      setCategories(data.service_categories);
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
    getAllCategories();
  }, []);

  return { loading, categories };
};

export default useGetAllServiceCategories;

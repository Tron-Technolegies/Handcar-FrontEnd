import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetAllCategories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/view_category`, {
        withCredentials: true,
      });
      const data = response.data;
      setCategories(data.categories);
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
    getAllCategories();
  }, []);

  return { loading, categories };
};

export default useGetAllCategories;

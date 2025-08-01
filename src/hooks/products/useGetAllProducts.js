import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllProducts = ({
  search,
  category,
  brand,
  min_price,
  max_price,
  sort,
  page = 1,
  limit = 6, // default: 6 products per page
}) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_products`, {
        withCredentials: true,
        params: {
          search,
          category,
          brand,
          min_price,
          max_price,
          sort,
          page,
          limit,
        },
      });

      const data = res.data;
      setProducts(data.products); // updated key (previously data.product)
      setTotalPages(data.pages || 1);
    } catch (err) {
      console.log(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          err ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [search, category, brand, min_price, max_price, sort, page, limit]);

  const refetch = () => getAllProducts();

  return { loading, products, totalPages, refetch };
};

export default useGetAllProducts;

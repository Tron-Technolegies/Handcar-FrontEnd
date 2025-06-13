import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllProducts = () =>
  // search,
  // category_id,
  // brand_id,
  // min_price,
  // max_price,
  // min_rating,
  // new_arrivals,
  // sort_by,

  {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${base_url}/view_products`, {
          withCredentials: true,
          // params: {
          //   search,
          //   category_id,
          //   brand_id,
          //   min_price,
          //   max_price,
          //   min_rating,
          //   new_arrivals,
          //   sort_by,
          // },
        });
        const data = res.data;
        setProducts(data.product);
      } catch (err) {
        console.log(
          err?.response?.data?.message ||
            err?.response?.data?.error ||
            err?.message ||
            err ||
            "something went wrong"
        );
        console.log(err);
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllCoupons = () => {
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);

  const getAllCoupons = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_coupons`, {
        withCredentials: true,
      });
      const data = res.data;
      setCoupons(data.coupon);
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
    getAllCoupons();
  }, []);

  return { loading, coupons };
};

export default useGetAllCoupons;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetOrderHistory = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/my_orders`, {
        withCredentials: true,
      });
      const data = response.data;
      setOrders(data.orders);
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
    getOrders();
  }, []);

  const refetch = () => {
    getOrders();
  };

  return { loading, refetch, orders };
};

export default useGetOrderHistory;

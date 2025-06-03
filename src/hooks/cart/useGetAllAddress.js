import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllAddress = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState([]);

  const getAllAddress = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_addresses`, {
        withCredentials: true,
      });
      const data = res.data;
      setAddress(data.addresses);
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
    getAllAddress();
  }, []);

  const refetch = () => {
    getAllAddress();
  };
  return { loading, address, refetch };
};

export default useGetAllAddress;

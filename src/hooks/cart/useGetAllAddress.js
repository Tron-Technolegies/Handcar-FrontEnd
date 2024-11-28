import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllAddress = () => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState([]);

  const getAllAddress = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setAddress(data.address);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllAddress();
  }, []);
  return { loading, address };
};

export default useGetAllAddress;

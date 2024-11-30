import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllServices = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const getAllServices = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setServices(data.services);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllServices();
  }, []);

  return { loading, services };
};

export default useGetAllServices;

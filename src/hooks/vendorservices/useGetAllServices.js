import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllServices = () => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const getAllServices = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_service_user`);
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

//this is a comment

export default useGetAllServices;

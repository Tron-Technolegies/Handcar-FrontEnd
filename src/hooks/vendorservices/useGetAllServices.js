import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllServices = ({ lat, lng }) => {
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

  const getAllServices = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_service_user`, {
        params: {
          lat: lat,
          lng: lng,
        },
      });
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

  const refetch = () => {
    getAllServices();
  };

  return { loading, services, refetch };
};

//this is a comment

export default useGetAllServices;

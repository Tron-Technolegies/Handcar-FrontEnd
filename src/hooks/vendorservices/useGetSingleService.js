import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetSingleService = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState({});

  const getSingleService = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/view_single_service_user/${id}/`,
        { withCredentials: true }
      );
      const data = res.data;
      setService(data.service);
    } catch (err) {
      console.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.error ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleService();
  }, []);

  return { loading, service };
};

export default useGetSingleService;

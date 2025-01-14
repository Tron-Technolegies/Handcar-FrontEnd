import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useGetLocationServices = ({ lat, long }) => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  const getLocationService = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/get_nearby_services`, {
        params: {
          lat: lat,
          lng: long,
        },
      });
      const data = res.data;
      setDatas(data.services);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocationService();
  }, []);

  return { loading, datas };
};

export default useGetLocationServices;

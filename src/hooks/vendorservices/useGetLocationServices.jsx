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
        withCredentials: true,
      });
      const data = res.data;
      setDatas(data.services);
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
    getLocationService();
  }, []);

  return { loading, datas };
};

export default useGetLocationServices;

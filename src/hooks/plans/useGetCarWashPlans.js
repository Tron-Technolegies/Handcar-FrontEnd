import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetCarWashPlans = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const getCarWashPlans = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_plans`, {
        withCredentials: true,
      });
      const data = res.data;
      setPlans(data.plan);
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
    getCarWashPlans();
  }, []);

  return { loading, plans };
};

export default useGetCarWashPlans;

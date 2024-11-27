import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetCarWashPlans = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const getCarWashPlans = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setPlans(data.plans);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
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

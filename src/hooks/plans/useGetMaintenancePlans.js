import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetMaintenancePlans = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);

  const getMaintenancePlans = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setPlans(data.plans);
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
    getMaintenancePlans();
  }, []);

  return { loading, plans };
};

export default useGetMaintenancePlans;

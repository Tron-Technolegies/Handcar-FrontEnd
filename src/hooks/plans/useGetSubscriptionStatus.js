import axios from "axios";
import { useEffect, useState } from "react";

const useGetSubscriptionStatus = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/get_subscription_status", {
        withCredentials: true, 
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Subscription error", err);
        setLoading(false);
      });
  }, []);

  return { data, loading };
};

export default useGetSubscriptionStatus;

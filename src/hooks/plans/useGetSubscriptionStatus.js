import axios from "axios";
import { useEffect, useState } from "react";

const useGetSubscriptionStatus = () => {
  const [data, setData] = useState({ subscribed: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/get_subscription_status", {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        // Not logged in (401) or not a subscriber (404)
        if (
          err.response?.status === 401 ||
          err.response?.status === 404 ||
          err.response?.data?.subscribed === false
        ) {
          setData({ subscribed: false });
        } else {
          console.error("Subscription error", err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading };
};

export default useGetSubscriptionStatus;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useGetServiceReviews = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getServiceReviews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_service_rating`);
      const data = res.data;
      setReviews(data.Ratings);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServiceReviews();
  }, []);

  return { loading, reviews };
};

export default useGetServiceReviews;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useWriteReview = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const writeReview = async ({ rating, comment, id }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/add_review/${id}/`,
        { rating, comment },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Review added successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, writeReview };
};

export default useWriteReview;

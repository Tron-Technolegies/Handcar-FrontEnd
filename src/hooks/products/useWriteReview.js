import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useWriteReview = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const writeReview = async ({ review, image }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "url",
        { review, image },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Review added successfully");
      navigate("/accessories/1");
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

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useAddServiceReview = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postReview = async ({ id, rating, comment }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/add_service_rating`,
        {
          service_id: id,
          rating,
          comment,
        },
        { withCredentials: true }
      );
      const data = res.data;
      navigate(`/servicepage/${id}`);
      toast.success("Successfully added");
    } catch (err) {
      console.log(err);

      toast.error(
        err?.response?.data?.error ||
          err?.response?.data?.detail ||
          err.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, postReview };
};

export default useAddServiceReview;

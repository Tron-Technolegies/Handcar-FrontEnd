import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const usePostLog = () => {
  const [loading, setLoading] = useState(false);
  const postLog = async ({ action, service_id }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("action", action);
    formData.append("service_id", service_id);
    try {
      const res = await axios.post(
        `${base_url}/log_service_interaction`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      const data = res.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, postLog };
};

export default usePostLog;

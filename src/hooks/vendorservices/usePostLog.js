import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const usePostLog = () => {
  const [loading, setLoading] = useState(false);
  const postLog = async () => {
    setLoading(true);
    try {
      const res = await axios.post("url", {});
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

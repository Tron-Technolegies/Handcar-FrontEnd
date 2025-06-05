import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useSetDefaultAddress = () => {
  const [loading, setLoading] = useState();
  const setDefault = async ({ id }) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${base_url}/set_default_address/${id}/`,
        {},
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("Default address changed");
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
  return { loading, setDefault };
};

export default useSetDefaultAddress;

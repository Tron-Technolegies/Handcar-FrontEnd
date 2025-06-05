import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useDeleteAddress = () => {
  const [loading, setLoading] = useState(false);
  const deleteAdress = async ({ id }) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${base_url}/delete_address/${id}/`, {
        withCredentials: true,
      });
      const data = response.data;
      toast.success("Address Deleted successfully");
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
  return { loading, deleteAdress };
};

export default useDeleteAddress;

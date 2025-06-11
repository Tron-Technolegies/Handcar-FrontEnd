import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const updateProfile = async ({ last_name, first_name, email }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/Edit_UserProfile_By_user`,
        { last_name, first_name, email },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("profile updated successfully");
    } catch (error) {
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
  return { loading, updateProfile };
};

export default useUpdateProfile;

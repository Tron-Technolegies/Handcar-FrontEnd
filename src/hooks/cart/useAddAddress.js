import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddAddress = () => {
  const [loading, setLoading] = useState(false);

  const addAddress = async ({
    name,
    ad1,
    ad2,
    state,
    zip,
    country,
    // phone,
    id,
  }) => {
    if (
      name === "" ||
      ad1 === "" ||
      ad2 === "" ||
      state === "" ||
      zip === "" ||
      country === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/add_address`,
        {
          name,
          street: ad1,
          city: ad2,
          state,
          zip_code: zip,
          country,
          // phone,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Address added successfully");
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
  return { loading, addAddress };
};

export default useAddAddress;

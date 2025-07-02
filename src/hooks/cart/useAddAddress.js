import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddAddress = () => {
  const [loading, setLoading] = useState(false);

  const addAddress = async ({
    user,
    name,
    phone_number,
    street,
    building_name,
    floor_apartment_no,
    landmark,
    area_district,
    city,
    country,
    address_type,
  }) => {
    // Basic validation
    if (
      !name ||
      !phone_number ||
      !street ||
      !building_name ||
      !floor_apartment_no ||
      !area_district ||
      !city
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/add_address`,
        {
          name,
          phone_number,
          street,
          building_name,
          floor_apartment_no,
          landmark,
          area_district,
          city,
          country,
          address_type,
        },
        { withCredentials: true }
      );

      toast.success("Address added successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addAddress };
};

export default useAddAddress;

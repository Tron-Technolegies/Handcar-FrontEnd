import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useAddAddress = () => {
  const [loading, setLoading] = useState(false);

  const addAddress = async ({
    street,
    building_name,
    floor_apartment_no,
    landmark,
    area_district,
    city,
    country = "United Arab Emirates",
    address_type = "Home",
    is_default = false,
    // phone,
  }) => {
    if (
      !street ||
      !building_name ||
      !floor_apartment_no ||
      !area_district ||
      !city
    ) {
      toast.error("Please fill all the required fields");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/add_address`,
        {
          street,
          building_name,
          floor_apartment_no,
          landmark,
          area_district,
          city,
          country,
          address_type,
          is_default,
          // phone,
        },
        { withCredentials: true }
      );

      toast.success("Address added successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, addAddress };
};

export default useAddAddress;

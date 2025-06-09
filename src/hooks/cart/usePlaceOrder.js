import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import axios from "axios";
import { base_url } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const usePlaceOrder = () => {
  const [loading, setLoading] = useState(false);
  const { setOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const placeTheOrder = async ({
    username,
    contact,
    address,
    cartItems,
    totalPrice,
  }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/place_order`,
        { username, contact, address, cartItems, totalPrice },
        { withCredentials: true }
      );
      const data = response.data;
      setOrder({ ...data.order_.details, ...data.order_id });
      toast.success("Successfully Placed Order");
      navigate("/confirm");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          "something went wrong"
      );
    }
  };
  return { loading, placeTheOrder };
};

export default usePlaceOrder;

import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import axios from "axios";
import { base_url } from "../../constants";

const usePlaceOrder = ({
  userId,
  username,
  contact,
  address,
  cartItems,
  totalPrice,
}) => {
  const [loading, setLoading] = useState(false);
  const { setOrder } = useContext(CartContext);

  const placeTheOrder = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/place_order`,
        { userId, username, contact, address, cartItems, totalPrice },
        { withCredentials: true }
      );
    } catch (error) {}
  };
  return { loading, placeTheOrder };
};

export default usePlaceOrder;

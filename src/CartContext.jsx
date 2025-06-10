import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [order, setOrder] = useState(null);
  const [coupon, setCoupon] = useState(null);
  const [applied, setApplied] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        order,
        setOrder,
        coupon,
        setCoupon,
        applied,
        setApplied,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

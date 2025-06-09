import React, { useContext } from "react";
import ConfirmationNavigation from "../components/confirmOrder/ConfirmationNavigation";
import ConfirmationMsg from "../components/confirmOrder/ConfirmationMsg";
import OrderDetails from "../components/confirmOrder/OrderDetails";
import { CartContext } from "../CartContext";

export default function ConfirmOrderPage() {
  const { order } = useContext(CartContext);
  return (
    <div className="lg:px-[120px] py-10 px-5">
      <ConfirmationNavigation />
      <div className="flex md:flex-row flex-col gap-7 my-10">
        <ConfirmationMsg order={order} />
        <OrderDetails order={order} />
      </div>
    </div>
  );
}

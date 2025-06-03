import React, { useState } from "react";
import CartNavigation from "../components/cart/CartNavigation";
import CartItem from "../components/cart/CartItem";
import CouponsSection from "../components/cart/CouponsSection";
import CheckOutSection from "../components/cart/CheckOutSection";
import useGetCartItems from "../hooks/cart/useGetCartItems";
import Loading from "../components/Loading";

export default function CartPage() {
  const { loading, items, price, refetch } = useGetCartItems();
  const [updateTrigger, setUpdateTrigger] = useState(false);
  return loading ? (
    <Loading />
  ) : (
    <div className="lg:px-[120px] px-10 py-10">
      <CartNavigation />
      <div className="my-10 flex flex-col gap-5">
        {items.map((x, index) => (
          <CartItem
            key={index}
            name={x.product_name}
            qty={x.quantity}
            totalPrice={x.total_price}
            image={x.product_image}
            id={x.cart_item_id}
            refetch={refetch}
            updateTrigger={updateTrigger}
            setUpdateTrigger={setUpdateTrigger}
          />
        ))}
        {items.length < 1 && (
          <p className="text-2xl text-center ">No Items in Cart</p>
        )}
      </div>

      <CouponsSection />
      <CheckOutSection price={price} />
    </div>
  );
}

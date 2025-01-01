import React from "react";
import CartNavigation from "../components/cart/CartNavigation";
import CartItem from "../components/cart/CartItem";
import CouponsSection from "../components/cart/CouponsSection";
import CheckOutSection from "../components/cart/CheckOutSection";
import useGetCartItems from "../hooks/cart/useGetCartItems";
import Loading from "../components/Loading";

export default function CartPage() {
  const { loading, items, price } = useGetCartItems();
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
          />
        ))}
      </div>
      <CouponsSection />
      <CheckOutSection price={price} />
    </div>
  );
}

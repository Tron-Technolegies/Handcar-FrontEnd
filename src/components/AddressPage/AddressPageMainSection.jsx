import React, { useContext, useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import ItemInCart from "./ItemInCart";
import { Link, useNavigate } from "react-router-dom";
import useGetAllAddress from "../../hooks/cart/useGetAllAddress";
import Loading from "../Loading";
import useGetCartItems from "../../hooks/cart/useGetCartItems";
import { CartContext } from "../../CartContext";
import { toast } from "react-toastify";
import usePlaceOrder from "../../hooks/cart/usePlaceOrder";
import { UserContext } from "../../UserContext";

export default function AddressPageMainSection() {
  const { loading, address, refetch } = useGetAllAddress();
  const { loading: cartLoading } = useGetCartItems();
  const { loading: orderLoading, placeTheOrder } = usePlaceOrder();
  const { cartItems, totalPrice, order } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  async function placeOrder() {
    if (address.length < 1) {
      toast.warn("Please Add an Address");
      return;
    }
    const defaultAddress = address.find((item) => item.is_default);
    if (!defaultAddress) {
      toast.warn("Please Select an Address");
      return;
    }

    await placeTheOrder({
      cartItems,
      username: user?.first_name,
      contact: user?.username,
      address: defaultAddress,
      totalPrice,
    });
  }
  return (
    <div className="lg:px-[120px] pb-10 px-5 flex xl:flex-row flex-col gap-5">
      <div className="xl:w-2/3 w-full">
        <div>
          <h4 className="text-2xl font-semibold mb-5">
            Select a shipping address
          </h4>
          {loading ? (
            <Loading />
          ) : (
            <div className="flex flex-col gap-5">
              {address.length > 0 &&
                address.map((item) => (
                  <AddressCard
                    key={item.id}
                    name={item.name}
                    ad1={item.street}
                    ad2={item.city}
                    state={item.state}
                    zip={item.zip_code}
                    country={item.country}
                    active={item.is_default}
                    id={item.id}
                    refetch={refetch}
                  />
                ))}
              {address.length < 1 && (
                <p>No address added. please Add a new Address</p>
              )}
            </div>
          )}
        </div>
        <AddressForm refetch={refetch} />
      </div>
      <div className="xl:w-1/3 w-full">
        {cartLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-3 p-3 border rounded-xl shadow-md">
            <p className="text-xl font-semibold">Items in Cart</p>
            {cartItems?.length > 0 &&
              cartItems?.map((item) => (
                <ItemInCart
                  key={item.cart_item_id}
                  name={item.product_name}
                  image={item.product_image}
                  qty={item.quantity}
                  price={item.total_price}
                />
              ))}

            <div className="h-[1px] bg-black"></div>
            <div className="flex flex-col gap-3 text-lg">
              <div className="flex justify-between">
                <p className="text-[#979797]">Total</p>
                <p>AED {totalPrice}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#979797]">Delivery</p>
                <p>AED 20.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#979797]">Grand total</p>
                <p className="text-[#17A600] font-semibold">
                  AED {totalPrice + 20}
                </p>
              </div>
            </div>
            <button
              onClick={placeOrder}
              className="px-4 py-2 text-center border hover:bg-white hover:text-black rounded-lg bg-black text-white"
            >
              Place Order
            </button>
            {orderLoading && <Loading />}
          </div>
        )}
      </div>
    </div>
  );
}

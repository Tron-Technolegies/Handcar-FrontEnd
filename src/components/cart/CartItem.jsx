import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import useUpdateItemInCart from "../../hooks/cart/useUpdateItemInCart";
import Loading from "../Loading";
import useRemoveCartItems from "../../hooks/cart/useRemoveCartItems";
import useGetCartItems from "../../hooks/cart/useGetCartItems";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function CartItem({ name, totalPrice, qty, id, image }) {
  const [quantity, setQuantity] = useState(1);
  const { loading, updateItemInCart } = useUpdateItemInCart();
  const { loading: removeLoading, removeCartItem } = useRemoveCartItems();
  const { refetch } = useGetCartItems();

  useEffect(() => {
    if (qty) {
      setQuantity(qty);
    }
  }, [qty]);

  useEffect(() => {
    updateItemInCart({ id: id, no: quantity });
  }, [quantity]);

  const handleRemove = async () => {
    await removeCartItem({ id });
    refetch();
  };
  return (
    <div className="bg-[#F5F5F5] p-5 rounded-lg flex md:flex-row flex-col gap-10 justify-between items-center">
      <div className="flex gap-5 items-center">
        <img
          src={image}
          className="w-[100px] h-[100px] rounded-md object-cover"
        ></img>
        <div>
          <h4 className="text-lg font-semibold max-w-[300px]">{name}</h4>
          {/* <p className="text-[#7D7D7D] text-sm">Model Number : A800S</p> */}
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <select
          className={`w-full py-1 px-3 rounded-lg bg-white border border-gray-300 text-gray-900 `}
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        >
          {list?.map((item) => (
            <option
              className="border-b py-1 border-gray-300"
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
        <p className="min-w-fit text-[#17A600]">AED {totalPrice}</p>
        <p onClick={handleRemove}>
          <CiTrash />
        </p>
      </div>
      {loading && <Loading />}
      {removeLoading && <Loading />}
    </div>
  );
}

import React from "react";
import { CiTrash } from "react-icons/ci";
import useAddItemtoCart from "../../hooks/cart/useAddItemtoCart";
import useRemoveWishListItem from "../../hooks/wishlist/useRemoveWishListItem";
import Loading from "../Loading";

export default function WishlistItem({
  image,
  productId,
  itemId,
  name,
  price,
}) {
  const { loading, addItemToCart } = useAddItemtoCart();
  const { loading: removeLoading, removeWishListItem } =
    useRemoveWishListItem();

  async function handleAddToCart() {
    await addItemToCart({ id: productId });
    removeWishListItem({ id: itemId });
  }
  return (
    <div className="bg-[#F5F5F5] p-5 rounded-lg flex md:flex-row flex-col gap-10 justify-between items-center">
      <div className="flex gap-5 items-center">
        <img src={image} className="w-[100px] h-[100px] rounded-md"></img>
        <div>
          <h4 className="text-lg font-semibold max-w-[300px]">{name}</h4>
          {/* <p className="text-[#7D7D7D] text-sm">Model Number : A800S</p> */}
          <p className="min-w-fit text-[#17A600]">AED {price}</p>
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 min-w-fit rounded-lg bg-black border-2 text-white shadow-md hover:bg-white hover:text-black"
        >
          Move to Cart
        </button>
        <p
          onClick={() => removeWishListItem({ id: itemId })}
          className="cursor-pointer"
        >
          <CiTrash />
        </p>
        {removeLoading && <Loading />}
      </div>
    </div>
  );
}

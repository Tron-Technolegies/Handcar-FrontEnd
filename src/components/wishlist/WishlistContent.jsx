import React from "react";
import WishlistItem from "./WishlistItem";
import useGetWishListItems from "../../hooks/wishlist/useGetWishListItems";
import Loading from "../Loading";

export default function WishlistContent() {
  const { loading, items } = useGetWishListItems();
  return loading ? (
    <Loading />
  ) : (
    <div className="lg:px-[120px] py-10 px-5">
      <h5 className="mb-5">My Collection</h5>
      <div className="flex flex-col gap-3">
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
      </div>
    </div>
  );
}

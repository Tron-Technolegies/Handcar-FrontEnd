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
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            name={item.product_name}
            price={item.product_price}
            image={item.product_image}
            productId={item.product_id || ""}
            itemId={item.id}
          />
        ))}
      </div>
    </div>
  );
}

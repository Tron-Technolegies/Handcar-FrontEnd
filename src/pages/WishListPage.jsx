import React from "react";
import WishlistNavigation from "../components/wishlist/WishlistNavigation";
import CarAccessoriesList from "../components/homepage/carAccessoriesList/CarAccessoriesList";
import WishlistContent from "../components/wishlist/WishlistContent";

export default function WishListPage() {
  return (
    <div className="">
      <WishlistNavigation />
      <WishlistContent />
      <CarAccessoriesList />
    </div>
  );
}

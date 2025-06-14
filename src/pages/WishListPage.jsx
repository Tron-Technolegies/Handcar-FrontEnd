import React, { useEffect } from "react";
import WishlistNavigation from "../components/wishlist/WishlistNavigation";
import CarAccessoriesList from "../components/homepage/carAccessoriesList/CarAccessoriesList";
import WishlistContent from "../components/wishlist/WishlistContent";

export default function WishListPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <WishlistNavigation />
      <WishlistContent />
      {/* <CarAccessoriesList /> */}
    </div>
  );
}

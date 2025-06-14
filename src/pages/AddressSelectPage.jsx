import React, { useEffect } from "react";
import AddressPageNavigation from "../components/AddressPage/AddressPageNavigation";
import AddressPageMainSection from "../components/AddressPage/AddressPageMainSection";

export default function AddressSelectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AddressPageNavigation />
      <AddressPageMainSection />
    </div>
  );
}

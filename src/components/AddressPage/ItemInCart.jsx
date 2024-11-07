import React from "react";

export default function ItemInCart() {
  return (
    <div className="flex gap-3 items-center p-3 border-t">
      <img
        src="/accessories/product.png"
        className="w-[79px] h-[53px] object-cover"
      ></img>
      <div className="max-w-[200px]">
        <p>Bosch F002H60041 Front Brake Pad for Passenger...</p>
        <p>Quantity : 1</p>
      </div>
      <p>AED 120</p>
    </div>
  );
}

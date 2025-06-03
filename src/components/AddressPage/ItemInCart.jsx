import React from "react";

export default function ItemInCart({ name, qty, price, image }) {
  return (
    <div className="flex gap-3 items-center p-3 border-t">
      <img src={image} className="w-[79px] h-[53px] object-cover"></img>
      <div className="max-w-[200px]">
        <p>{name}</p>
        <p>Quantity : {qty}</p>
      </div>
      <p>AED {price}</p>
    </div>
  );
}

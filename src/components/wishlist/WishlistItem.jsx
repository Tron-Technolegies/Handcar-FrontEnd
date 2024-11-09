import React from "react";
import { CiTrash } from "react-icons/ci";
const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function WishlistItem() {
  return (
    <div className="bg-[#F5F5F5] p-5 rounded-lg flex md:flex-row flex-col gap-10 justify-between items-center">
      <div className="flex gap-5 items-center">
        <img
          src="/cart/item.png"
          className="w-[100px] h-[100px] rounded-md"
        ></img>
        <div>
          <h4 className="text-lg font-semibold max-w-[300px]">
            Dash Cam 4K A800S Native True 4K Resolution (Front Only)
          </h4>
          <p className="text-[#7D7D7D] text-sm">Model Number : A800S</p>
          <p className="min-w-fit text-[#17A600]">AED 370.00</p>
        </div>
      </div>
      <div className="flex gap-7 items-center">
        <select
          className={`w-full py-1 px-3 rounded-lg bg-white border border-gray-300 text-gray-900 `}
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
        <button className="px-4 py-2 min-w-fit rounded-lg bg-black border-2 text-white shadow-md hover:bg-white hover:text-black">
          Move to Cart
        </button>
        <p>
          <CiTrash />
        </p>
      </div>
    </div>
  );
}

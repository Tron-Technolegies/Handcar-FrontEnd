import React from "react";

export default function ({ img }) {
  return (
    <div className="bg-white p-5 rounded-lg w-[190px] h-[250px] flex flex-col justify-between border shadow-md">
      <img src={img} className="w-[150px] h-[109px]"></img>
      <button className="px-4 py-2 rounded-md bg-black text-white">
        Enquire Parts
      </button>
    </div>
  );
}

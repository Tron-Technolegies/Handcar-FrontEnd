import React from "react";
import { handleEnquiry } from "../../../utils/WhatsApp";

export default function ({ img }) {
  return (
    <div className="bg-white p-5 rounded-lg w-[190px] h-[250px] flex flex-col justify-between border shadow-md">
      <img src={img} className="w-[150px] h-[109px]"></img>
      <button
        className="px-4 py-2 rounded-md bg-black text-white"
        onClick={() =>
          handleEnquiry({
            name: `I would like to know spare parts of ${img.slice(12, 19)}`,
          })
        }
      >
        Enquire Parts
      </button>
    </div>
  );
}

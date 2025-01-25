import React, { useState } from "react";
import { handleEnquiry } from "../../../utils/WhatsApp";
import { toast } from "react-toastify";
const PartsFinder = () => {
  const [number, setNumber] = useState("");
  function handleClick() {
    if (number === "") {
      toast.warn("Please Enter the Chasis Number");
    } else {
      handleEnquiry({
        name: `My chasis number is ${number}. I would like to discover spare parts`,
      });
      setNumber("");
    }
  }
  return (
    <div className="lg:px-[120px] px-10 py-10 red-gradient flex flex-col items-center gap-5">
      <p className="md:text-3xl text-base max-w-[750px] font-semibold text-white text-center">
        Enter your chassis number to discover tailored spare parts for your car.
      </p>
      <div className="flex md:flex-row flex-col gap-2 items-center">
        <input
          className="rounded-lg outline-none h-9 px-2 py-1 md:w-fit w-full"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter chasis number"
        />
        <button
          className="bg-black md:w-fit w-full px-4 py-2 rounded-lg text-white"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default PartsFinder;

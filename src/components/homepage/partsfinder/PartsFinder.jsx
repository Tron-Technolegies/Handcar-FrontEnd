import React from "react";
const PartsFinder = () => {
  return (
    <div className="lg:px-[120px] px-10 py-10 red-gradient flex flex-col md:items-start items-center gap-5">
      <p className="md:text-3xl text-base max-w-[650px] font-semibold text-white md:text-left text-center">
        Enter your chassis number to discover tailored spare parts for your car.
      </p>
      <div className="flex md:flex-row flex-col gap-2 items-center">
        <input
          className="rounded-lg outline-none h-9 px-2 py-1 md:w-fit w-full"
          type="text"
          placeholder="Enter chasis number"
        />
        <button className="bg-black md:w-fit w-full px-4 py-2 rounded-lg text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default PartsFinder;

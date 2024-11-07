import React from "react";

const SparePartsHeader = () => {
  return (
    <div className="lg:ps-[120px] md:ps-10 pb-10 flex md:flex-row flex-col justify-between items-center">
      <div className="flex flex-col items-center md:items-start gap-5 md:text-left text-center max-w-[500px] md:px-0 px-5">
        <h1 className="md:text-4xl text-2xl font-semibold ">
          Find best in quality <br /> spare parts for your drive
        </h1>
        <p className="font-medium">
          Reliable Performance, Guaranteed: Discover top-tier spare parts
          engineered to elevate your driving experience.
        </p>
        <button className="px-4 py-2 bg-[#D60205] rounded-lg text-white w-fit mb-5">
          Enquire Now
        </button>
      </div>

      <img
        src={"/spareparts/header.png"}
        className="xl:max-w-[782px] xl:max-h-[561px] lg:max-w-[500px] lg:max-h-[359px] max-w-[350px] max-h-[251px] rounded-md"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default SparePartsHeader;

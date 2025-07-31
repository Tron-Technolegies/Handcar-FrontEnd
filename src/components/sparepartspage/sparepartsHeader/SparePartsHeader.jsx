import React from "react";
import { handleEnquiry } from "../../../utils/WhatsApp";

const SparePartsHeader = () => {
  return (
    <div className="lg:ps-[120px] md:ps-10 pb-10 flex md:flex-row flex-col justify-between items-center">
      <div className="flex flex-col items-center md:items-start gap-5 md:text-left text-center max-w-[500px] md:px-0 px-5">
        <h1 className="md:text-4xl text-2xl font-semibold ">
          Shop the Best Quality Car Spare Parts in Abu Dhabi, UAE
        </h1>
        <p className="font-medium">
          top-quality car spare parts in Abu Dhabi at the best prices. Fast service and perfect fit
          for all major car brands with HandCar.
        </p>
        <button
          className="px-4 py-2 bg-[#D60205] rounded-lg text-white w-fit mb-5"
          onClick={() => handleEnquiry({ name: `I like to know more about spare parts` })}
        >
          Enquire Now
        </button>
      </div>

      <img
        src={"/spareparts/header.png"}
        className="xl:max-w-[582px] xl:max-h-[561px] lg:max-w-[500px] lg:max-h-[359px] max-w-[350px] max-h-[251px] rounded-md mr-16"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default SparePartsHeader;

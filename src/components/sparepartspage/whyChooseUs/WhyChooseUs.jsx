import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
  return (
    <div className="lg:px-[120px] px-10 py-10 flex flex-col items-center gap-5 w-full">
      <h1 className="md:text-4xl text-2xl font-semibold">Why Choose Us</h1>
      <div className="flex lg:flex-row flex-col gap-5 items-center justify-between w-full my-5">
        <WhyChooseCard
          bg={"red-gradient"}
          img={"/spareparts/icon-3.png"}
          stat={"1M+"}
          content={"Genuine spare parts"}
        />
        <WhyChooseCard
          bg={"green-gradient"}
          img={"/spareparts/icon-1.png"}
          stat={"100+"}
          content={"Top Brands"}
        />
        <WhyChooseCard
          bg={"blue-gradient"}
          img={"/spareparts/icon-2.png"}
          stat={"1000+"}
          content={"Spare parts shipped"}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;

import React from "react";
import subscription_page_headerimg from "../../../assets/subscription_page_headerimage.svg";

const SubscriptionHeader = () => {
  function navigate() {
    document.getElementById("wash").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex flex-col gap-10 items-center lg:px-[120px] py-10">
      <div className="flex flex-col gap-5 items-center text-center max-w-[800px] lg:px-0 px-5">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Car Service Subscription Plans in Abu Dhabi, UAE
        </h1>
        <p className="text-sm font-medium">
         With HandCar’s subscription plans in Abu Dhabi, car maintenance is simple. Reliable service, fast support, and great value each month.
        </p>
        <button
          onClick={navigate}
          className="px-4 py-2 rounded-lg bg-[#D60205] text-white"
        >
          View all plans
        </button>
      </div>
      <img src={subscription_page_headerimg} alt="" className="" />
    </div>
  );
};

export default SubscriptionHeader;

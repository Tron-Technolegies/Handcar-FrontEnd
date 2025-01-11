import React from "react";
import car_accessories from "../../../assets/car_accessories.png";
import car_image from "../../../assets/car_image.png";
import third_featureimg from "../../../assets/third_featureimg.png";
import HandCarFeatureCard from "./HandCarFeatureCard";

const HandCarFeatures = () => {
  return (
    <div className="bg-white flex md:flex-row flex-col justify-center gap-10 lg:px-[120px] px-10 py-10">
      <HandCarFeatureCard
        content={"Find best and cost effective services for your ride."}
        button={"Find Services"}
        image={car_image}
      />
      <HandCarFeatureCard
        content={"Find best in quality car spare parts"}
        button={"Enquire Now"}
        image={third_featureimg}
      />
    </div>
  );
};

export default HandCarFeatures;

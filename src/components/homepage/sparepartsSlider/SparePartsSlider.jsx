import React from "react";
import "./SparePartsSlider.css";
import spare_parts_brand from "../../../assets/spare_parts_brand.png";

const SparePartsSlider = () => {
  return (
    <div className="spare_parts_slider">
      <div className="spare_parts_slider_heading">
        <h1 className="md:text-3xl text-xl font-semibold">
          Curated Original Spare Parts
        </h1>
      </div>
      <div className="spare_parts_slider_img_container">
        <div className="spare_parts_slider_img">
          <img src={spare_parts_brand} alt="Spare Parts Brand" />
          <img src={spare_parts_brand} alt="Spare Parts Brand" />
        </div>
      </div>
    </div>
  );
};

export default SparePartsSlider;

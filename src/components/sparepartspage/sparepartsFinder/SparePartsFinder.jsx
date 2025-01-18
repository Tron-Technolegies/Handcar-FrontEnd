import React from "react";
import "../sparepartsFinder/SparePartsFinder.css";
import topbrand_spare_parts from "../../../assets/topbrand_spare_parts.png";
const SparePartsFinder = () => {
  return (
    <div className="spare_parts_finder_container">
      <div className="spare_parts_finder">
        <div className="spare_parts_content">
          <h1>
            Search for something <br /> specific?
          </h1>
          <p>
            Find the best car spare parts <br /> from the top brands by Item
            code
          </p>
        </div>

        <div className="spare_parts_finder_searchs">
          <input type="text" name="" id="" placeholder="Enter item code" />
          <button>Enquire Now</button>
        </div>
      </div>

      <div className="spare_parts_finder_container_img">
        <img src={topbrand_spare_parts} alt="" />
      </div>
    </div>
  );
};

export default SparePartsFinder;

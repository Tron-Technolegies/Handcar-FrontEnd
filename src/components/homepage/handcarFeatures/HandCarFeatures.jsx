import React from "react";
import "./HandCarFeatures.css";
import car_accessories from "../../../assets/car_accessories.png";
import car_image from "../../../assets/car_image.png";
import third_featureimg from "../../../assets/third_featureimg.png";

const HandCarFeatures = () => {
  return (
    <div>
      <div className="handcar_feature_container">
        <div className="handcar_first_feature">
          <div className="first_feature_content">
            <div className="first_feature_and_button z-10">
              <h1>
                Explore Best Accessories <br /> from Top Brands
              </h1>
              <button className="handcar_feature_button">View Products</button>
            </div>
            <div className="first_feature_img">
              <img src={car_accessories} className="" alt="Car Accessories" />
            </div>
          </div>
        </div>
        <div className="feature_right-column">
          <div className="handcar_second_feature">
            <div className="first_feature_content">
              <div className="first_feature_and_button z-10">
                <h1>
                  Find best and cost effective <br /> services for your ride.
                </h1>
                <button className="handcar_feature_button">
                  Find Services
                </button>
              </div>
              <div className="second_feature_img">
                <img src={car_image} alt="Car Accessories" />
              </div>
            </div>
          </div>
          <div className="handcar_third_feature">
            <div className="first_feature_content">
              <div className="first_feature_and_button z-10">
                <h1>
                  Find best and cost effective <br /> services for your ride.
                </h1>
                <button className="handcar_feature_button">Enquire Now</button>
              </div>
              <div className="second_feature_img">
                <img src={third_featureimg} alt="Car Accessories" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandCarFeatures;

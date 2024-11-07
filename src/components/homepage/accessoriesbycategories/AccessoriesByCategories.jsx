import React from "react";
import "../accessoriesbycategories/AccessoriesByCategories.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import car_seat from "../../../assets/car_seat.png";
import car_exterior from "../../../assets/car_exterior.png";
import car_gadgets from "../../../assets/car_gadgets.png";
import car_performance_accessories from "../../../assets/car_performance_accessories.png";

const AccessoriesByCategories = () => {
  return (
    <div className="accessories_by_categories_container">
      <div className="accessories_by_category_heading">
        <h1 className="md:text-4xl text-2xl font-semibold">
          Find Accessories by Categories
        </h1>
      </div>

      <div className="accessories_by_category">
        <div className="different_accessories">
          <div className="accessories_content">
            <div className="accessories_heading">
              <h1 className="font-semibold">
                Car Interior <br />
                Accessories
              </h1>
            </div>

            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" className="explore_icon" />
            </div>
          </div>

          <div className="accessories_img">
            <img src={car_seat} alt="Car Interior Accessories" />
          </div>
        </div>

        <div className="different_accessories">
          <div className="accessories_content">
            <div className="accessories_heading">
              <h1 className="font-semibold">
                Car Exterior <br />
                Accessories
              </h1>
            </div>

            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" className="explore_icon" />
            </div>
          </div>

          <div className="accessories_img">
            <img src={car_exterior} alt="Car Exterior Accessories" />
          </div>
        </div>
      </div>

      <div className="accessories_by_category second_section">
        <div className="different_accessories">
          <div className="accessories_content">
            <div className="accessories_heading">
              <h1 className="font-semibold">
                Electronic & <br />
                Gadgets
              </h1>
            </div>

            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" className="explore_icon" />
            </div>
          </div>

          <div className="accessories_img">
            <img src={car_gadgets} alt="Electronic & Gadgets" />
          </div>
        </div>

        <div className="different_accessories">
          <div className="accessories_content">
            <div className="accessories_heading">
              <h1 className="font-semibold">
                Performance <br />
                Accessories
              </h1>
            </div>

            <div className="accessories_explore_btn">
              <p>Explore</p>
              <FaLongArrowAltRight color="#DB1215" className="explore_icon" />
            </div>
          </div>

          <div className="accessories_img">
            <img
              src={car_performance_accessories}
              alt="Performance Accessories"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesByCategories;

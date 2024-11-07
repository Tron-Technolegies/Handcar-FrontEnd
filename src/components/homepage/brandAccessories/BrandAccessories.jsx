import React from "react";
import "../brandAccessories/BrandAccessories.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import pioneer_accessories from "../../../assets/pioneer_accessories.png";
import pioneer_logo from "../../../assets/pioneer_logo.png";
import BrandAcessoryElt from "./BrandAcessoryElt";
const BrandAccessories = () => {
  return (
    <div className="lg:px-[120px] py-10 px-10 flex flex-col gap-10">
      <h1 className="md:text-3xl font-semibold text-xl text-center">
        Find Accessories by Brands
      </h1>
      <div className="flex lg:flex-row flex-col gap-10 justify-center mx-auto">
        {/* <div className="accessories_scroll_btn">
            <FaAngleLeft size={50} color="#C1C1C1" />
          </div> */}
        <BrandAcessoryElt />
        <BrandAcessoryElt />
        {/* <div className="accessories_scroll_btn">
            <FaAngleRight size={50} color="#C1C1C1" />
          </div> */}
      </div>
    </div>
  );
};

export default BrandAccessories;

import React from "react";
import "../variousHandcarServices/VariousHandcarServices.css";
import car_wash_icon from "../../../assets/car_wash_icon.png";
import car_beauty_icon from "../../../assets/car_beauty_icon.png";
import car_service_icon from "../../../assets/car_service_icon.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import ServiceElt from "./ServiceElt";
const VariousHandcarServices = () => {
  return (
    <div className="mt-0">
      <div className="red-gradient lg:px-[120px] px-10 py-10 text-center">
        <h1 className="md:text-4xl text-2xl text-white font-semibold">
          Our Services
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 gap-y-10 lg:px-[120px] px-10 py-10 justify-items-center">
        <ServiceElt
          icon={"/services/service-1.png"}
          content={"Painting Service"}
        />
        <ServiceElt
          icon={"/services/service-5.png"}
          content={"Fitting Service"}
        />
        <ServiceElt
          icon={"/services/service-2.png"}
          content={"Spare Parts Service"}
        />
        <ServiceElt
          icon={"/services/service-3.png"}
          content={"General Checkup"}
        />
        <ServiceElt icon={"/services/service-4.png"} content={"Car wash"} />
      </div>
    </div>
  );
};

export default VariousHandcarServices;

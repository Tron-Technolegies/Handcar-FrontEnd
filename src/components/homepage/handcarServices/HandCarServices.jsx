import React from "react";
import carwash from "../../../assets/car-wash.png";
import painting from "../../../assets/painting-service.png";
import spareparts from "../../../assets/spare-parts.png";
import fitting from "../../../assets/fitting-service.png";
import generalcheckup from "../../../assets/general-checkup.png";


const services = [
  {
    icon: painting,
    title: "Car Painting Services",
    features: ["Scratch Removal", "Panel Repainting", "Paint Protection"],
  },
  {
    icon: carwash,
    title: "Car Washing Services",
    features: ["Interior Cleaning", "Exterior Wash", "Waterless Wash"],
  },
  {
    icon: fitting,
    title: "Fitting Services",
    features: ["Tyre Change", "Wheel Alignment", "Tyre Balancing"],
  },
  {
    icon: generalcheckup,
    title: "General Checkup Services",
    features: ["Dashboard Polish", "Seat Cleaning", "Odor Removal"],
  },
  {
    icon: spareparts,
    title: "Spare Parts Services",
    features: ["Tire Change", "Wheel Alignment", "Tyre Balancing"],
  },
];

const HandCarServices = () => {
  return (
    <div className="lg:px-[120px] px-10 py-14 flex flex-col gap-10 text-center">
      <div className="flex flex-col gap-3 items-center">
        <h4 className="text-3xl font-semibold mb-12">Our Car Services Include</h4>
        {/* <p className="font-medium text-gray-700 max-w-2xl">
          We Deliver Comprehensive Car Solutions! Explore Our Range of Services
        </p> */}
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  ">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-slate-50 p-6 shadow-md rounded-lg hover:scale-105 transition-all">
              <img src={service.icon} alt={service.title} className="h-14 mb-4" />
              <h5 className="text-red-600 font-semibold text-base mb-2">
                {service.title}
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </div>
  );
};

export default HandCarServices;

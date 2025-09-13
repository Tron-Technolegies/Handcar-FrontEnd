import React from "react";
import carwash from "../../../assets/car-wash.webp";
import painting from "../../../assets/painting-service.webp";
import spareparts from "../../../assets/spare-parts.webp";
import fitting from "../../../assets/fitting-service.webp";
import generalcheckup from "../../../assets/general-checkup.webp";

const services = [
  {
    icon: painting,
    title: "Car Painting Services",
    alt: "Professional car painting and auto body refinishing service icon | car maintenance  abudhabi",
    features: ["Scratch Removal", "Panel Repainting", "Paint Protection"],
  },
  {
    icon: carwash,
    title: "Car Washing Services",
    features: ["Interior Cleaning", "Exterior Wash", "Waterless Wash"],
    alt: "Expert car fitting service icon for automotive repairs | car service  abudhabi",
  },
  {
    icon: fitting,
    title: "Fitting Services",
    alt: "Expert car fitting service icon for automotive repairs | car service  abudhabi",
    features: ["Tyre Change", "Wheel Alignment", "Tyre Balancing"],
  },
  {
    icon: generalcheckup,
    title: "General Checkup Services",
    alt: "General car check-up and vehicle maintenance service icon | car repair  abudhabi",
    features: ["Dashboard Polish", "Seat Cleaning", "Odor Removal"],
  },
  {
    icon: spareparts,
    title: "Spare Parts Services",
    alt: "Mechanic inspecting car engine in modern auto repair shop | car service  abudhabi",
    features: ["Tire Change", "Wheel Alignment", "Tyre Balancing"],
  },
];

const HandCarServices = () => {
  return (
    <div className="lg:px-[120px] px-10 py-14 flex flex-col gap-10 text-center">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-3xl font-semibold mb-2">Our Car Services Include</h2>
        {/* <p className="font-medium text-gray-700 max-w-2xl">
          We Deliver Comprehensive Car Solutions! Explore Our Range of Services
        </p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6  ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-slate-50 p-6 shadow-md rounded-lg hover:scale-105 transition-all"
          >
            <img src={service.icon} alt={service.alt} className="h-14 mb-4" />
            <h5 className="text-red-600 font-semibold text-base mb-2">{service.title}</h5>
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

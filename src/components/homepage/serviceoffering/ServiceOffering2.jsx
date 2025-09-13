import React from "react";
// import carImage from "../../../assets/car.png";
// import suvside from "../../../assets/RedSUV-side-view.webp";

const ServiceOffering2 = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-4">
          <div className="w-10/12 mr-9 md:w-1/2">
            <img
              src={"/red-car.webp"}
              className="w-full h-auto  object-contain"
              alt="Red SUV front three‑quarter view—professional auto repair and service"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">
              Handcar Auto Services: Premium Car Repair & Maintenance in Abu Dhabi
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Looking for reliable car service in Abu Dhabi? If you are concerned about maintaining
              your car's pristine condition, Handcar boasts professional auto service with certified
              technicians and original equipment parts. Whether you are looking for routine car
              maintenance or need advanced diagnostics for complex issues, we offer high-quality
              multi-brand repair alternatives.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-3xl font-semibold mb-4">
              Small Actions, Big Rewards: Minor Auto Repair
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Over time, a lack of regular minor service will impact the health of your car, and
              will ultimately cost you. The minor service consists of key steps like changing the
              engine oil and rotating your tires, which keep your engine healthy and fuel efficient.
              The closer you can stick to your minor service helps you avoid any surprise costs in
              the middle of Dhabi.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src={"RedSUV-side-view.webp"}
              className="w-full h-auto object-contain ml-28"
              alt="Red compact SUV side profile on black background |  car maintenance abudhabi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOffering2;

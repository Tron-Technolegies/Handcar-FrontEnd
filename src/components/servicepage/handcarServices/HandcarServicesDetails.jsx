import React from "react";
import "../handcarServices/HandcarServicesDetails.css";
import handcarservices_header from "../../../assets/handcarservices_header.png";
const HandcarServicesDetails = () => {
  return (
    <div className="lg:px-[120px] pt-10 px-10 flex md:flex-row flex-col justify-between items-center mb-0 ">
      <div className="flex flex-col gap-3 md:items-start items-center">
        <h1 className="md:text-4xl text-2xl font-bold">Professional Car Repair & Maintenance <br /> in Abu Dhabi,UAE</h1>
        <div>
          {" "}
          <p className="md:text-left text-center">
Quality car service in Abu Dhabi backed by expert technicians, <br/> honest advice, and dependable results every time          </p>
         
        </div>
      </div>

      <img
        src={handcarservices_header}
        alt=""
        className="w-[350px] h-[250px] object-cover"
      />
    </div>
  );
};

export default HandcarServicesDetails;

import React, { useState } from "react";
import HandcarServicesDetails from "../components/servicepage/handcarServices/HandcarServicesDetails";
import VariousHandcarServices from "../components/servicepage/variousHandcarServices/VariousHandcarServices";
import PaintingService from "../components/servicepage/vendorService/VendorService";
import PaintingServiceDetailPopup from "../components/servicepage/vendorService/VendorServiceDetailPopup";
import MapLocation from "../components/servicepage/vendorService/MapLocation";

const ServicePage = () => {
  return (
    <div>
      <HandcarServicesDetails />
      <VariousHandcarServices />
      <MapLocation />
      <PaintingService />
    </div>
  );
};

export default ServicePage;

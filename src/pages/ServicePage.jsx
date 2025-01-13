import React, { useState } from "react";
import HandcarServicesDetails from "../components/servicepage/handcarServices/HandcarServicesDetails";
import VariousHandcarServices from "../components/servicepage/variousHandcarServices/VariousHandcarServices";
import PaintingService from "../components/servicepage/paintingService/PaintingService";
import PaintingServiceDetailPopup from "../components/servicepage/paintingService/PaintingServiceDetailPopup";

const ServicePage = () => {
  return (
    <div>
      <HandcarServicesDetails />
      <VariousHandcarServices />
      <PaintingService />
    </div>
  );
};

export default ServicePage;

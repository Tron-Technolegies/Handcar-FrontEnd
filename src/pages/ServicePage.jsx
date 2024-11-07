import React, { useState } from "react";
import HandcarServicesDetails from "../components/servicepage/handcarServices/HandcarServicesDetails";
import VariousHandcarServices from "../components/servicepage/variousHandcarServices/VariousHandcarServices";
import PaintingService from "../components/servicepage/paintingService/PaintingService";
import PaintingServiceDetailPopup from "../components/servicepage/paintingService/PaintingServiceDetailPopup";

const ServicePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <HandcarServicesDetails />
      <VariousHandcarServices />
      <PaintingService setShowPopup={setShowPopup} />
      {showPopup && <PaintingServiceDetailPopup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default ServicePage;

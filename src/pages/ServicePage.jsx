import React, { useState } from "react";
import HandcarServicesDetails from "../components/servicepage/handcarServices/HandcarServicesDetails";
import VariousHandcarServices from "../components/servicepage/variousHandcarServices/VariousHandcarServices";
import PaintingService from "../components/servicepage/paintingService/PaintingService";
import PaintingServiceDetailPopup from "../components/servicepage/paintingService/PaintingServiceDetailPopup";
import useGetAllServices from "../hooks/vendorservices/useGetAllServices";
import Loading from "../components/Loading";

const ServicePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { loading, services } = useGetAllServices();
  return loading ? (
    <Loading />
  ) : (
    <div>
      <HandcarServicesDetails />
      <VariousHandcarServices />
      <PaintingService setShowPopup={setShowPopup} />
      {showPopup && <PaintingServiceDetailPopup setShowPopup={setShowPopup} />}
    </div>
  );
};

export default ServicePage;

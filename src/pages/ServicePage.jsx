import React, { useContext, useEffect, useState } from "react";
import HandcarServicesDetails from "../components/servicepage/handcarServices/HandcarServicesDetails";
import VariousHandcarServices from "../components/servicepage/variousHandcarServices/VariousHandcarServices";
import PaintingService from "../components/servicepage/vendorService/VendorService";
import MapLocation from "../components/servicepage/vendorService/MapLocation";
import { UserContext } from "../UserContext";
import useGetAllServices from "../hooks/vendorservices/useGetAllServices";
import Loading from "../components/Loading";

const ServicePage = () => {
  const { location } = useContext(UserContext);
  const { loading, services, refetch } = useGetAllServices(location);

  useEffect(() => {
    refetch();
  }, [location]);
  return (
    <div>
      <HandcarServicesDetails />
      <VariousHandcarServices />
      <MapLocation />
      {loading ? <Loading /> : <PaintingService services={services} />}
    </div>
  );
};

export default ServicePage;

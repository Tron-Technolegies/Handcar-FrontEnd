import React, { useContext, useEffect, useState } from "react";
import HandcarServicesDetails from "../components/servicepage/handcarServices/HandcarServicesDetails";
import VariousHandcarServices from "../components/servicepage/variousHandcarServices/VariousHandcarServices";
import PaintingService from "../components/servicepage/vendorService/VendorService";
import MapLocation from "../components/servicepage/vendorService/MapLocation";
import { UserContext } from "../UserContext";
import useGetAllServices from "../hooks/vendorservices/useGetAllServices";
import Loading from "../components/Loading";

const ServicePage = () => {
  const { location, activeServiceCategory, setActiveServiceCategory } =
    useContext(UserContext);
  const { loading, services, refetch } = useGetAllServices(location);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    setActiveServiceCategory("All");
    refetch();
  }, [location]);

  useEffect(() => {
    setFilteredServices(services);
  }, [services]);

  useEffect(() => {
    if (activeServiceCategory === "All") {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(
        (x) => x.service_category === activeServiceCategory
      );
      setFilteredServices(filtered);
    }
  }, [activeServiceCategory]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HandcarServicesDetails />
      <VariousHandcarServices />
      <MapLocation />
      {loading ? <Loading /> : <PaintingService services={filteredServices} />}
    </div>
  );
};

export default ServicePage;

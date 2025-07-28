import React, { useContext, useEffect, useState } from "react";
import HandcarServicesDetails from "../components/servicepage/handcarServices/HandcarServicesDetails";
import VariousHandcarServices from "../components/servicepage/variousHandcarServices/VariousHandcarServices";
import PaintingService from "../components/servicepage/vendorService/VendorService";
import MapLocation from "../components/servicepage/vendorService/MapLocation";
import { UserContext } from "../UserContext";
import useGetAllServices from "../hooks/vendorservices/useGetAllServices";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet"; // ⬅️ Add Helmet
import WhyChooseUs from "../components/servicepage/WhyChooseUsinService/WhyChooseUs";
import FAQ from "../components/homepage/faq/FAQ";
import { FaQ } from "react-icons/fa6";
import FAQinservice from "../components/servicepage/FAQ/faq";

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
      <Helmet>
        <title>Car Services Abu Dhabi | Repair, Maintenance & Painting | HandCar</title>
        <meta
          name="description"
          content="Looking for the best car service in Abu Dhabi? HandCar offers expert maintenance, fast car repair, and honest pricing. Trusted by drivers across the UAE."
        />
      </Helmet>

      <HandcarServicesDetails />
      <VariousHandcarServices />
      <MapLocation />
      {loading ? <Loading /> : <PaintingService services={filteredServices} />}
      <WhyChooseUs />
      <FAQinservice />
    </div>
  );
};

export default ServicePage;

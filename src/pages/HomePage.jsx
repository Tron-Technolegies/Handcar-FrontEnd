import React from "react";
import { Helmet } from "react-helmet";

import Pageredirection from "../components/homepage/redirection/Pageredirection";
import PartsFinder from "../components/homepage/partsfinder/PartsFinder";
import HandCarFeatures from "../components/homepage/handcarFeatures/HandCarFeatures";
import ExclusiveOffers from "../components/homepage/exclusiveoffers/ExclusiveOffers";
import BestDeals from "../components/homepage/bestdeals/BestDeals";
import GuaranteedFeatures from "../components/homepage/guaranteedfeatures/GuaranteedFeatures";
import AccessoriesByCategories from "../components/homepage/accessoriesbycategories/AccessoriesByCategories";
import CarAccessoriesList from "../components/homepage/carAccessoriesList/CarAccessoriesList";
import BrandSpareParts from "../components/homepage/brandSpareparts/BrandSpareParts";
import BrandAccessories from "../components/homepage/brandAccessories/BrandAccessories";
import HandCarServices from "../components/homepage/handcarServices/HandCarServices";
import SparePartsSlider from "../components/homepage/sparepartsSlider/SparePartsSlider";
import AboutHandcar from "../components/homepage/aboutHandcar/AboutHandcar";
import Testimonials from "../components/homepage/testimonials/Testimonials";
import FAQ from "../components/homepage/faq/FAQ";
import ContactForm from "../components/homepage/contactForm/ContactForm";
import WhyChooseUs from "../components/homepage/whychooseus/WhyChooseUs";
import PrimeServices from "../components/homepage/serviceoffering/ServiceOffering";
import ServiceOffering from "../components/homepage/serviceoffering/ServiceOffering";
import ServiceOffering2 from "../components/homepage/serviceoffering/ServiceOffering2";

const HomePage = () => {
  return (
    <div>
      {/* Meta Info */}
      <Helmet>
        <title>HandCar | Expert Car Service & Repair  in Abu Dhabi, UAE </title>
        <meta
          name="description"
          content="Need car service in Abu Dhabi? HandCar makes it easy. Trusted by UAE drivers for fast, reliable car repair in Abu Dhabi. Book now!"
        />
      </Helmet>

      {/* Component Structure */}
      {/* <Pageredirection /> */}
      <PartsFinder />
      <HandCarFeatures />
      <BestDeals />
      {/* <ExclusiveOffers /> */}
      <HandCarServices />
      <GuaranteedFeatures />
      
      <WhyChooseUs />
      <BrandSpareParts />
      {/* <BrandAccessories /> */}
        <AboutHandcar />
      <AccessoriesByCategories />
      <SparePartsSlider />
      <CarAccessoriesList />
      
      <ServiceOffering />
      
      <FAQ />
      {/* <WhatsApp/> */}
      <Testimonials />
      <ServiceOffering2 />
      
      <ContactForm />
      {/* <LoginPage/> */}
      {/* <OtpVerification/> */}
    </div>
  );
};

export default HomePage;

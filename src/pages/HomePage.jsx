import React from "react";
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

// import LoginPage from "../components/loginpage/LoginPage";
// import OtpVerification from "../components/loginpage/OtpVerification";

const HomePage = () => {
  return (
    <div>
      {/* <Pageredirection /> */}
      <PartsFinder />
      <HandCarFeatures />
      {/* <BestDeals /> */}
      {/* <ExclusiveOffers /> */}

      <GuaranteedFeatures />
      {/* <AccessoriesByCategories /> */}
      {/* <CarAccessoriesList /> */}

      <BrandSpareParts />
      {/* <BrandAccessories /> */}
      <HandCarServices />
      <SparePartsSlider />
      <AboutHandcar />
      {/* <WhatsApp/> */}
      <Testimonials />
      <FAQ />
      <ContactForm />
      {/* <LoginPage/> */}
      {/* <OtpVerification/> */}
    </div>
  );
};

export default HomePage;

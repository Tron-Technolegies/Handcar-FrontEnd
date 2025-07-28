import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header/Header";
import SparePartsHeader from "../components/sparepartspage/sparepartsHeader/SparePartsHeader";
import WhyChooseUs from "../components/sparepartspage/whyChooseUs/WhyChooseUs";
import SparePartsFinder from "../components/sparepartspage/sparepartsFinder/SparePartsFinder";
import ChasisNumberFinder from "../components/sparepartspage/chasisnumberFinder/ChasisNumberFinder";
import SparePartsBrands from "../components/subscriptionpage/sparepartsBrands/SparePartsBrands";
import Footer from "../components/footer/Footer";
import SparePartsServiceSection from "../components/sparepartspage/Service/SparePartsServiceSection";

const SparePartsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Buy Genuine Car Spare Parts Abu Dhabi, UAE | HandCar</title>
        <meta
          name="description"
          content="Looking for car spare parts in Abu Dhabi? Shop genuine auto parts online with trusted quality and affordable prices. Fast delivery across the UAE."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://handcar.ae/spareparts" />
      </Helmet>

      <SparePartsHeader />
      <WhyChooseUs />
      <SparePartsFinder />
      <ChasisNumberFinder />
      <SparePartsBrands />
      <SparePartsServiceSection />
    </>
  );
};

export default SparePartsPage;

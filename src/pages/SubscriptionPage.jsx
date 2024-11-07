import React from "react";

import SubscriptionHeader from "../components/subscriptionpage/subscriptionHeader/SubscriptionHeader";

import CarWashPlans from "../components/subscriptionpage/subscriptionplans/CarWashPlans";
import MaintenancePlans from "../components/subscriptionpage/subscriptionplans/MaintenancePlans";
import CarAccessoriesList from "../components/homepage/carAccessoriesList/CarAccessoriesList";
import AccessoriesByCategories from "../components/homepage/accessoriesbycategories/AccessoriesByCategories";

const SubscriptionPage = () => {
  return (
    <div>
      <SubscriptionHeader />
      <CarWashPlans />
      <MaintenancePlans />
      <CarAccessoriesList />
      <AccessoriesByCategories />
    </div>
  );
};

export default SubscriptionPage;

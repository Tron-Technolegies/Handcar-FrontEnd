import React, { useEffect } from "react";
import SubscriptionHeader from "../components/subscriptionpage/subscriptionHeader/SubscriptionHeader";
import CarWashPlans from "../components/subscriptionpage/subscriptionplans/CarWashPlans";
import MaintenancePlans from "../components/subscriptionpage/subscriptionplans/MaintenancePlans";
import CarAccessoriesList from "../components/homepage/carAccessoriesList/CarAccessoriesList";
import AccessoriesByCategories from "../components/homepage/accessoriesbycategories/AccessoriesByCategories";

import useGetSubscriptionStatus from "../hooks/plans/useGetSubscriptionStatus";

const SubscriptionPage = () => {
  const { data, loading } = useGetSubscriptionStatus();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div>
      <SubscriptionHeader />

      {data.subscribed ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-2">Your Current Plan</h2>
          <p className="text-lg">{data.plan.name} - ₹{data.plan.price}</p>
          <p>Vendor: {data.vendor.name}</p>
          <p>Contact: {data.vendor.contact}</p>
          <p>Valid till: {data.plan.end_date}</p>
        </div>
      ) : (
        <>
          <CarWashPlans />
          <MaintenancePlans />
          <CarAccessoriesList />
          <AccessoriesByCategories />
        </>
      )}
    </div>
  );
};

export default SubscriptionPage;

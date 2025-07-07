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

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const isSubscribed = data?.subscribed;

  return (
    <div>
      <SubscriptionHeader />

      {isSubscribed ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-2">Your Current Plan</h2>
          <p className="text-lg">
            {data.plan.name} - ₹{data.plan.price}
          </p>
          <p>Category: {data.plan.category}</p>
          <p>Duration: {data.plan.duration} months</p>
          <p>Valid till: {data.plan.end_date}</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Assigned Vendors</h3>
          {data.vendors.length > 0 ? (
            <ul className="space-y-4">
              {data.vendors.map((vendor) => (
                <li
                  key={vendor.id}
                  className="border rounded-lg p-4 shadow-md bg-gray-50 max-w-md mx-auto"
                >
                  <p className="font-medium">Name: {vendor.name}</p>
                  <p>Contact: {vendor.contact}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No vendors assigned yet.</p>
          )}
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

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import SubscriptionHeader from "../components/subscriptionpage/subscriptionHeader/SubscriptionHeader";
import CarWashPlans from "../components/subscriptionpage/subscriptionplans/CarWashPlans";
import MaintenancePlans from "../components/subscriptionpage/subscriptionplans/MaintenancePlans";
import CarAccessoriesList from "../components/homepage/carAccessoriesList/CarAccessoriesList";
import AccessoriesByCategories from "../components/homepage/accessoriesbycategories/AccessoriesByCategories";
import useGetSubscriptionStatus from "../hooks/plans/useGetSubscriptionStatus";
import SubscriptionContentSection from "../components/subscriptionpage/ContentSection/SubscriptionContentSection";

const SubscriptionPage = () => {
  const { data, loading } = useGetSubscriptionStatus();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isUpgrade = searchParams.get("upgrade") === "true";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  const isSubscribed = data?.subscribed;

  return (
    <div>
      <Helmet>
        <title>Car Service Plans Abu Dhabi, UAE | HandCar Subscription</title>
        <meta
          name="description"
          content="Discover car service plans in Abu Dhabi with HandCar. Choose a car subscription that offers regular maintenance, support."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://handcar.ae/subscription" />
      </Helmet>

      <SubscriptionHeader />

      {isSubscribed && !isUpgrade ? (
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

          <button
            className="mt-8 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            onClick={() => {
              window.location.href = "/subscription?upgrade=true";
            }}
          >
            Upgrade Plan
          </button>
        </div>
      ) : (
        <>
          {isUpgrade && (
            <h2 className="text-2xl font-bold text-center mt-10 text-red-700">Upgrade Your Plan</h2>
          )}
          <CarWashPlans />
          <MaintenancePlans />
          {/* <CarAccessoriesList />
          <AccessoriesByCategories /> */}
          <SubscriptionContentSection />
        </>
      )}
    </div>
  );
};

export default SubscriptionPage;

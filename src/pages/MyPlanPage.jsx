import React, { useEffect } from "react";
import useGetSubscriptionStatus from "../hooks/plans/useGetSubscriptionStatus";

const MyPlanPage = () => {
  const { data, loading } = useGetSubscriptionStatus();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!data?.subscribed) {
    return (
      <div className="text-center mt-10 text-red-600">
        You are not subscribed to any plan.
      </div>
    );
  }

  return (
    <div className="px-5 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Your Current Plan</h1>

      <div className="border rounded-lg shadow-md p-6 bg-gray-50">
        <p className="text-lg font-semibold mb-2">
          {data.plan.name} Plan - ₹{data.plan.price}
        </p>
        <p>Category: {data.plan.category}</p>
        <p>Duration: {data.plan.duration} months</p>
        <p>
          Valid from: {data.plan.start_date} to {data.plan.end_date}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Assigned Vendors</h2>
        {data.vendors.length > 0 ? (
          <ul className="space-y-4">
            {data.vendors.map((vendor) => (
              <li
                key={vendor.id}
                className="border rounded-lg p-4 bg-white shadow-sm"
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
    </div>
  );
};

export default MyPlanPage;

import React, { useEffect } from "react";
import useGetSubscriptionStatus from "../hooks/plans/useGetSubscriptionStatus";
import { useNavigate } from "react-router-dom";

const MyPlanPage = () => {
  const { data, loading } = useGetSubscriptionStatus();
  const navigate = useNavigate();

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
    <div className="px-5 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Current Plan</h1>

      {/* Main Plan Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{data.plan.name} Plan</h2>
              <p className="text-blue-100 text-sm uppercase tracking-wide">{data.plan.category}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">
                {data.plan.price === "N/A" || data.plan.price === "NA" ? (
                  <span className="text-xl">Price not available</span>
                ) : (
                  `₹${data.plan.price}`
                )}
              </div>
              <div className="text-blue-100 text-sm">{data.plan.duration} months</div>
            </div>
          </div>
        </div>

        {/* Plan Details Section */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-green-800 mb-1">Valid From</h3>
              <p className="text-lg font-medium text-green-700">{data.plan.start_date}</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-orange-800 mb-1">Valid Until</h3>
              <p className="text-lg font-medium text-orange-700">{data.plan.end_date}</p>
            </div>
          </div>

          {/* Vendors Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Assigned Vendors</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {data.vendors.length} vendor{data.vendors.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {data.vendors.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {data.vendors.map((vendor) => (
                  <div
                    key={vendor.id}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{vendor.name}</h4>
                        <p className="text-gray-600 text-sm">{vendor.contact}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {vendor.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">No vendors assigned yet</p>
                <p className="text-gray-400 text-sm">Vendors will be assigned to your plan soon</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate("/subscription?upgrade=true")}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Upgrade Plan
            </button>
            <button
              onClick={() => navigate("/support")}
              className="flex-1 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-50"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
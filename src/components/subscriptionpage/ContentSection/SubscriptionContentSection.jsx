import React from "react";

const SubscriptionContentSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
        {/* First Section: Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              More than Just Maintenance – It's Total Car Care
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              When you subscribe to our car service in Abu Dhabi, you're getting more than just
              maintenance you're choosing a smarter, easier way to manage your vehicle. Each plan
              provides a comprehensive approach to managing your car care and it's designed to make
              things easier for you.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Easily manage your oil change, scheduled checkup, priority access to car care and
              emergency assistance for one simple monthly fee.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-red-50 to-red-600 p-8 rounded-xl shadow-lg ml-20 max-w-md ">
              <div className="bg-white rounded-lg p-6 text-center ">
                <div className="text-6xl mb-4 ">
                  <img
                    src="/total-car-care.jpg"
                    className="h-96 rounded-lg w-80 ml-2"
                    alt="Total Car Care"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Total Care</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section: Who is our car service great for? */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Who is our car service great for?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Busy Professionals */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-500">
              <div className="text-center mb-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Busy Professionals</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-left">
                No time to book or manage your car service appointments.Our subscription plans are
                great for busy professionals looking for a reliable car maintenance solution so you
                can spend less time worrying and more time driving!
              </p>
            </div>

            {/* Families & Fleet Owners */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Families & Fleet Owners</h3>
              </div>
              <p className="text-gray-600 leading-relaxed  text-justify">
                If you manage multiple vehicles for your family or a business fleet in Abu Dhabi,
                let us take the stress out of your maintaining so many affairs. Our service plans
                infuse a simple, organized way to make sure every vehicle is kept in top condition.
              </p>
            </div>

            {/* Budget-Conscious Car Owners */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Save on Car Care</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-justify">
                If you feel stuck paying too much for regular maintenance and cannot afford the cost
                of superior quality, Our monthly service plans are the affordable alternative to
                maintaining your vehicle in optimum condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionContentSection;

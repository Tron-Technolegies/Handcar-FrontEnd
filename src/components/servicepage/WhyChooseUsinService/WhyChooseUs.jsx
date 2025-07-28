import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-2xl mr-4">✔</span>
              <h3 className="text-xl font-semibold">Certified Technicians</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Our team consists of highly skilled, certified professionals dedicated to providing top-quality service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-2xl mr-4">✔</span>
              <h3 className="text-xl font-semibold">Genuine OEM Parts</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              We use only authentic OEM parts to ensure your vehicle performs at its best.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-2xl mr-4">✔</span>
              <h3 className="text-xl font-semibold">Transparent Pricing</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              Clear, upfront pricing with no hidden fees to give you peace of mind.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-2xl mr-4">✔</span>
              <h3 className="text-xl font-semibold">Warranty-backed Work</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify">
              All our services come with a warranty, ensuring your satisfaction and reliability.
            </p>
          </div>
        </div>

        {/* First Section: Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 mt-36">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Important Questions to Ask Your Mechanic Before Getting Your Car Serviced 
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Asking the right questions before you hand your keys over to a mechanic is very important. Not only will the world of service become clear to you, but it will also save you money. The intelligent car owners of 2025 are better informed, and honest mechanics are more than happy to answer your questions regarding car repair in Abu Dhabi, where we need to be more upfront and honest than ever
            </p>
          </div>
         <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-50 to-red-600 p-8 rounded-xl shadow-lg ml-24 max-w-md">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">
                  <img src="/public/ask.jpg" className="h-96 rounded-lg w-full" alt="" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Ask Questions</h4>
             
              </div>
            </div>
          </div>
        </div>

        {/* Second Section: Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-50 to-red-600 p-8 rounded-xl shadow-lg mr-24 max-w-md">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">
                  <img src="/public/rightgarage.jpg" className="rounded-lg w-full" alt="" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Right Garage</h4>
                
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-6 text-gray-800 mt-6">
              Taking your car to the right garage to repair your car in Abu Dhabi – what to know
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              When you choose the garage for your car repair in Abu Dhabi, you want to ensure you are working with a business that is open, honest and professional. Always ask to see the problem area before you agree to any work, and a clear, accurate picture along with a brief explanation should be given. Always request a clear written estimate with labour, VAT and parts written down along with if the parts are original OEM or aftermarket. A reliable garage will never shy away from providing proof. Picking a workshop that has good reviews and a business model that does not include unnecessary parts and labor, guarantees that you will get a knowledgeable car service you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
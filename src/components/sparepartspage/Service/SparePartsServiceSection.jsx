import React from "react";

const SparePartsServiceSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 lg:px-4">
        
        {/* First Section: Content Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Get Top-Quality Car Spare Parts in Abu Dhabi, UAE
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              If you're looking for quality car spare parts in Abu Dhabi, HandCar.ae is the best place to get the balance you need between quality, price, and trust. We provide authentic OEM car parts for manufacturers like Toyota and Nissan and also only provide aftermarket spares that have been rigorously tested, for all major brands, including BMW, Mercedes-Benz, Hyundai, and others.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              All products are checked for reliability and compatibility and tested for performance, so you can have peace of mind as you drive safely and efficiently on UAE roads. We have a large selection of car spare parts ranging from brake pads, air filters, and spark plugs, and even to complete engine components for almost every model on the road today.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              We are a leading online destination for buying auto spare parts in the UAE. All spare parts can be delivered promptly to you anywhere in Abu Dhabi. We offer part-matching support, and our prices are always transparent. No matter if you are a car owner, a garage, or a mechanic, we try to make it as easy as possible to shop for the right part and not confuse yourself.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Supported by real reviews from customers and by professionals already trusting us with spare parts, HandCar.ae is your one-stop shop for spare parts for your car in Abu Dhabi — trusted, tested, and always delivered on time.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-50 to-red-600 p-8 rounded-xl shadow-lg ml-10 max-w-md">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">
                  <img src="/public/spare-parts-img.jpeg" className="h-96 rounded-lg w-full" alt="Car Spare Parts" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Parts</h4>
                <p className="text-gray-600 text-sm">OEM & Aftermarket Options</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section: Image Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-red-50 to-red-600 p-8 rounded-xl shadow-lg mr-10 max-w-md">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">
                  <img src="/public/part-lookup.jpeg" className="h-96 rounded-lg w-full" alt="Part Lookup Tool" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Smart Lookup</h4>
                <p className="text-gray-600 text-sm">Find the right part easily</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              How to Determine the Correct Spare Part for Your Vehicle
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              When ordering a spare part for your vehicle, it can feel overwhelming, especially if you're not sure of the part numbers or how to find out what fits. At HandCar, our team has been able to help a thousand customers looking for car spare parts in Abu Dhabi avoid very costly mistakes by simply going through the correct steps.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              For instance, we had one customer that needed a new radiator fan for his Toyota Corolla, but he didn't know the year of the car. After he provided us with the VIN (Vehicle Identification Number), we could quickly match the part he needed and we saved him time, money, and effort.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Whether you are replacing brake pads, filters, sensors or anything else, the best way to find the right spare part for a perfect fit is to know the car's model, make, year, and engine type. We make it incredibly easy for anyone that orders auto spare parts online in the UAE with our smart lookup tool and expert support team they can call on if needed.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              With many OEM and aftermarket parts in stock, HandCar guarantees you get the right part the first time — with accuracy, speed, and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparePartsServiceSection;
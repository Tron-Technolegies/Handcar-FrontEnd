import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
const steps = [
  {
    id: 1,
    title: "Find the Right Spare Part for Your Vehicle",
    description: "Take your time to search through our catalogue and narrow down your choices for the part you need for your car.No guessing. Just fits your car!",
    icon: "/search.png",
  },
  {
    id: 2,
    title: "Place Your Order Quickly",
    description: "All it takes is a quick message to us using WhatsApp with your spare part order. Easy, quick and no fuss.",
    icon: "/online-booking.png", 
  },
  {
    id: 3,
    title: "Get Your Genuine Spare Part Delivered Quickly",
    description: "We ensure your original product gets delivered quickly and safely to your door.",
    icon: "/order.png", 
  },
];


  return (
    <>
{/* How It Works Section */}
<section className="bg-white py-16 px-4 mb-10 mt-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-16">HOW IT WORKS</h2>

    {/* Steps Container */}
    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* SVG Line Connector (Desktop only) */}
      <div className="hidden lg:block absolute top-16 left-0 w-full z-0">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,50 C250,0 750,100 1000,50" stroke="#10b981" strokeWidth="3" fill="none" strokeDasharray="10,6" />
        </svg>
      </div>

      {/* Step Cards */}
      {steps.map((step) => (
        <div key={step.id} className="relative z-10 flex flex-col items-center text-center max-w-xs">
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full shadow-md bg-white border border-gray-200">
            <img
              src={step.icon}
              alt={`Step ${step.id}`}
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
      <div className="lg:px-[120px] px-10 py-10 flex flex-col items-center gap-5 w-full mb-10">
        <h1 className="md:text-4xl text-2xl font-semibold mb-10">Why Choose Handcar for Auto Spare Parts in Abu Dhabi</h1>
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-center  w-full my-5">
          <WhyChooseCard
            bg={"red-gradient"}
            img={"/spareparts/icon-3.png"}
            stat={"1M+"}
            content={"Genuine spare parts"}
          />
          <WhyChooseCard
            bg={"green-gradient"}
            img={"/spareparts/icon-1.png"}
            stat={"100+"}
            content={"Top Brands"}
          />
          <WhyChooseCard
            bg={"blue-gradient"}
            img={"/spareparts/icon-2.png"}
            stat={"1000+"}
            content={"Spare parts shipped"}
          />
        </div>
      </div>
    </>
  );
};


export default WhyChooseUs;

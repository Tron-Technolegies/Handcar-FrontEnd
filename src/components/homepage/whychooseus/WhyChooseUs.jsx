import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-10 px-5 md:px-20">
      <div className="text-center mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Why Choose Us</h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mt-4">
          HandCar offers reliable <a href="https://handcar.ae/">car service in Abu Dhabi</a>, quality care and genuine parts, fully trained mechanics, together with modern and fully equipped workshop, to ensure that your car receives quality service quickly. We also offer specialist car repair services in Abu Dhabi with ability to deal with anything from a simple service to major mechanical repairs. Our teams specialise in mechanical repairs, or bodywork, and we have fair pricing with no hidden extras. We offer warranties for your peace of mind on the service we provide. We have many satisfied customers; your car is in safe hands.
        </p>
      </div>

      <div className="flex  md:flex-row gap-4 items-center text-center  p-6 ">
        <div className="p-4 flex-1 bg-gradient-to-t from-slate-200 to-white-600 shadow-xl shadow-stone-200 rounded-lg border-b border-l border-r border-slate-300 ">
          <h3 className="text-md mt-2  font-bold mb-2">Complete Car Care in One Place</h3>
          <p className="text-sm text-black text-center">Serving all repair needs, from regular service to repairs and painting.</p>
        </div>
        <div className="p-4 flex-1 bg-gradient-to-t from-slate-200 to-white-600 shadow-xl shadow-stone-200 rounded-lg border-b border-l border-r border-slate-300  ">
          <h3 className="text-lg font-bold mb-2">Skilled Technicians You Can Trust</h3>
          <p className="text-sm text-gray-600 text-center">Our technicians are experienced, detail-focused,and quality-driven.</p>
        </div>
        <div className="p-4 flex-1 bg-gradient-to-t from-slate-200 to-white-600 shadow-xl shadow-stone-200 rounded-lg border-b border-l border-r border-slate-300 ">
          <h3 className="text-lg font-bold mb-2">Genuine Parts, Guaranteed Quality</h3>
          <p className="text-sm text-gray-600 text-center">Our policy has always been to use genuine/trusted brand parts to achieve long-lasting satisfaction and safety.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

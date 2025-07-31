import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-8 px-5 md:px-20 mb-10">
      <div className="text-center mb-8 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold mb-5">Why Choose Us</h3>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mt-4">
          HandCar offers reliable <a href="https://handcar.ae/">car service in Abu Dhabi</a>,
          quality care and genuine parts, fully trained mechanics, together with modern and fully
          equipped workshop, to ensure that your car receives quality service quickly. We also offer
          specialist car repair services in Abu Dhabi with ability to deal with anything from a
          simple service to major mechanical repairs. Our teams specialise in mechanical repairs, or
          bodywork, and we have fair pricing with no hidden extras. We offer warranties for your
          peace of mind on the service we provide. We have many satisfied customers; your car is in
          safe hands.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-stretch text-center px-2 md:px-0">
        <div className="p-6 flex-1 bg-gradient-to-t from-slate-200 to-white shadow-xl shadow-stone-200 rounded-lg border border-slate-300">
          <h3 className="text-base md:text-md font-bold mb-2">Complete Car Care in One Place</h3>
          <p className="text-sm text-gray-700">
            Serving all repair needs, from regular service to repairs and painting.
          </p>
        </div>

        <div className="p-6 flex-1 bg-gradient-to-t from-slate-200 to-white shadow-xl shadow-stone-200 rounded-lg border border-slate-300">
          <h3 className="text-base md:text-md font-bold mb-2">Skilled Technicians You Can Trust</h3>
          <p className="text-sm text-gray-700">
            Our technicians are experienced, detail-focused, and quality-driven.
          </p>
        </div>

        <div className="p-6 flex-1 bg-gradient-to-t from-slate-200 to-white shadow-xl shadow-stone-200 rounded-lg border border-slate-300">
          <h3 className="text-base md:text-md font-bold mb-2">Genuine Parts, Guaranteed Quality</h3>
          <p className="text-sm text-gray-700">
            Our policy has always been to use genuine/trusted brand parts to achieve long-lasting
            satisfaction and safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

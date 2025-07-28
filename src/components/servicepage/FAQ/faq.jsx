import React, { useState } from 'react';

const FAQinservice = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "How Long Does Car Service Take?",
      answer: (
        <div>
          <p>The time it would take to service a car depends on the type of service in question.</p>
          <p>A service like an oil change, which may have filters and general check will often take <strong>45 minutes to a full hour</strong>. A full service that includes checking the brakes, topping up fluids, checking the battery, rotating tires and providing diagnostics will often take about <strong>an hour and a half to two hours</strong>.</p>
          <p>A more complex <a href="https://handcar.ae/servicepage" className="text-gray-700 hover:text-gray-900">car maintenance in Abu Dhabi</a>, such as engine trouble or transmission issues, will take as long as a full day or longer, depending on the severity and parts availability.</p>
          <p>At <strong>HandCar</strong>, a well-known brand for <a href="https://handcar.ae/servicepage" className="text-gray-700 hover:text-gray-900">car service in Abu Dhabi</a>, we usually complete our car services within <strong>1.5 to 2 hours</strong>. Upon claiming any time for any of our services, we ensure we provide a payable estimate of time before starting our work, thus giving you clarity through our entire service process and establishing trust from the first touchpoint.</p>
        </div>
      )
    },
    {
      question: "What Does a Car Service in Abu Dhabi Include?",
      answer: (
        <div>
          <p>A <a href="https://handcar.ae/servicepage" className="text-gray-700 hover:text-gray-900">car repair in Abu Dhabi</a> typically consists of some combination of multiple checks and painless works that keep your car performing to standard.</p>
          <p>Typical standard services will include an engine oil and oil filter change, air filter clean, a brake check, a short battery check, and tops up of fluids. Depending on your vehicle's mileage and usage, the garage might do adjustments to your vehicle or rotation of your tires before returning your vehicle, and at the same time, it is good practice to check your air conditioning and provide a computer diagnostic when servicing your vehicle.</p>
          <p>A <strong>service centre in Abu Dhabi</strong> should always provide you an accurate report and explain what work they did and if there are repairs required when completing a service. Regularly servicing your vehicle not only improves how you drive, but it also can help prevent costly major repairs down the track.</p>
        </div>
      )
    },
    {
      question: "Is It Safe to Leave Your Vehicle at a Certified Car Garage in Abu Dhabi?",
      answer: (
        <div>
          <p>Yes! Even a reputable workshop feels like an unsafe experience. Most garages in Abu Dhabi follow proper service procedures by registering a job card and keeping customers informed throughout the service time with adequate updates.</p>
          <p>Genuine workshop establishments will always wait for your approval before they do any extra work. Many also have secured parking or even CCTV on site.</p>
          <p>If you are selecting a reputable <a href="https://handcar.ae/servicepage" className="text-gray-700 hover:text-gray-900">car garage in Abu Dhabi</a> based on customer reviews you can feel comfortable leaving your vehicle in their acknowledged care from the moment you hand over your keys until the time you collect your car.</p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mb-16 mt-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800 pr-4">
                {item.question}
              </h3>
              {openItems[index] ? (
                <span className="text-gray-500 flex-shrink-0 text-xl">▲</span>
              ) : (
                <span className="text-gray-500 flex-shrink-0 text-xl">▼</span>
              )}
            </button>
            
            {openItems[index] && (
              <div className="px-6 pb-4 border-t border-gray-100">
                <div className="pt-4 text-gray-700 space-y-3">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQinservice;
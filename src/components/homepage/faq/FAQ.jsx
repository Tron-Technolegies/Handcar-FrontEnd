import React, { useState } from "react";
import "../faq/FAQ.css";

const faqData = [
  {
    question: "What’s Included in a 40,000 KM Car Service?",
    answer: (
      <span>
        The 40,000 km (or 24-month) service is more comprehensive than others. It typically includes
        replacement of spark plugs, brake fluid, air filter, engine oil, and oil filter. In
        contrast, the 100,000 km (or 60-month) service might only involve an engine oil and oil
        filter change—highlighting the difference in cost and complexity. If you're looking for
        dependable{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          car repair in Abu Dhabi
        </a>
        , understanding these service levels helps you plan effectively and keep your vehicle in
        optimal condition.
      </span>
    ),
  },
  {
    question: "Why should I choose Handcar car services?",
    answer: (
      <span>
        Handcar delivers consistent, professional{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          car service in Abu Dhabi
        </a>{" "}
        and expert{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          automotive repairs
        </a>{" "}
        for all major brands. Our modern facility is equipped with certified mechanics, genuine
        parts, and advanced diagnostics. With over 180 working bays and dedicated teams for
        mechanical and body repairs, we ensure fast turnaround, reliable quality, and customer-first
        service—every time.
      </span>
    ),
  },
  {
    question: "How is Handcar different from other car service providers?",
    answer: (
      <span>
        Handcar offers fast, high-quality{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          car service in Abu Dhabi
        </a>{" "}
        using only original parts and certified technicians. Our large, fully equipped workshop with
        over 180 service bays allows quick servicing without long waits. Unlike many providers, we
        have specialized teams for both mechanical and{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          body repairs
        </a>
        , delivering dealership-level quality at more affordable rates.
      </span>
    ),
  },
  {
    question: "What is the best service for a car?",
    answer: (
      <span>
        The best{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          car service in Abu Dhabi
        </a>{" "}
        depends on your vehicle’s age, mileage, and condition. A major service—covering engine oil,
        filters, brakes, spark plugs, and fluids—is the most complete option. Timely{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          automotive service
        </a>{" "}
        reduces breakdowns, enhances safety, and keeps your vehicle running at peak performance.
        Whether it’s{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          car maintenance
        </a>{" "}
        or{" "}
        <a href="https://www.handcar.ae/" target="_blank" rel="noopener noreferrer">
          car repair in Abu Dhabi
        </a>
        , following the manufacturer’s service schedule ensures long-term reliability.
      </span>
    ),
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq_container">
      <div className="faq_heading">
        <h3 className="md:text-3xl text-xl font-semibold">Frequently Asked Questions</h3>
      </div>
      <div className="faq_list">
        {faqData.map((item, index) => (
          <div key={index} className="faq_item">
            <div className="faq_question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>

              <span className="icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <p className="faq_answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

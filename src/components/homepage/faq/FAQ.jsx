import React, { useState } from "react";
import "../faq/FAQ.css";

const faqData = [
  {
    question: "What kind of car services do you offer?",
    answer:
      "We offer a wide variety of car services from periodic car servicing, wheel care services, denting/painting etc at our 30+ highly equipped car service centres spread across town.",
  },
  {
    question: "Why should I choose Handcar car services?",
    answer:
      "We offer a wide variety of car services from periodic car servicing, wheel care services, denting/painting etc at our 30+ highly equipped car service centres spread across town.",
  },
  {
    question: "How is Handcar different from other car service providers?",
    answer:
      "We offer a wide variety of car services from periodic car servicing, wheel care services, denting/painting etc at our 30+ highly equipped car service centres spread across town.",
  },
  {
    question: "Can I get my car repaired under insurance with Handcar?",
    answer:
      "We offer a wide variety of car services from periodic car servicing, wheel care services, denting/painting etc at our 30+ highly equipped car service centres spread across town.",
  },
  {
    question: "Does Handcar offer paint protection services for my car?",
    answer:
      "We offer a wide variety of car services from periodic car servicing, wheel care services, denting/painting etc at our 30+ highly equipped car service centres spread across town.",
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
        <h1>Common Car Service Questions</h1>
      </div>
      <div className="faq_list">
        {faqData.map((item, index) => (
          <div key={index} className="faq_item">
            <div className="faq_question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>

              <span className="icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="faq_answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

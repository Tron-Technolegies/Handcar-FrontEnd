import React from "react";

export default function TestimonialCard({ active, quote, name, place }) {
  return (
    <div
      className={`bg-white p-5 rounded-lg flex flex-col gap-5 ${active} shadow-md transform transition-transform duration-500`}
    >
      <img src="/comma1.png" className="w-16 h-10 me-auto"></img>
      <p>{quote}</p>
      <div className="flex flex-col gap-1">
        <img
          src="/testimonial.png"
          className="w-[64px] h-[64px] rounded-full"
          alt=""
          srcset=""
        />

        <h3 className="font-semibold">{name}</h3>
        <p>{place}</p>
      </div>
    </div>
  );
}
//max-w-[550px] bg-white p-5 rounded-lg flex flex-col gap-5

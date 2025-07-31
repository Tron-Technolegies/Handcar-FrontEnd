import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) stars.push(<FaStar key={i} className="text-yellow-500" />);
    else if (i === fullStars && hasHalf)
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-500" />);
  }
  return stars;
}

export default function TestimonialCard({ active, quote, name, place, rating = 5 }) {
  return (
    <div
      className={`bg-white p-5 rounded-lg flex flex-col gap-5 ${active} shadow-md transform transition-transform duration-500`}
    >
      <img src="/comma1.png" className="w-16 h-10 me-auto" />
      <p>{quote}</p>

      <div className="flex items-center gap-2">{renderStars(rating)}</div>

      <div className="flex flex-col gap-1">
        {/* <img src="/testimonial.png" className="w-[64px] h-[64px] rounded-full" alt={name} /> */}
        <h3 className="font-semibold">{name}</h3>
        <p>{place}</p>
      </div>
    </div>
  );
}

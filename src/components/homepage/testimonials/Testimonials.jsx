import React, { useState } from "react";
import "../testimonials/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    name: "Abu Ibrahim",
    location: "Dubai",
    message:
      "The quality is outstanding, and the customer service team went above and beyond to ensure I had a great experience. It's rare to find a company that genuinely cares about its customers as much as they do about their product. I've noticed a significant improvement in, and it's made a huge difference in my . ",
    imgSrc: "/testimonial.png",
  },
  {
    id: 2,
    name: "Fatima Ali",
    location: "Abu Dhabi",
    message:
      "The quality is outstanding, and the customer service team went above and beyond to ensure I had a great experience. It's rare to find a company that genuinely cares about its customers as much as they do about their product. I've noticed a significant improvement in, and it's made a huge difference in my . ",
    imgSrc: "/testimonial.png",
  },
  {
    id: 3,
    name: "Omar Khan",
    location: "Sharjah",
    message:
      "The quality is outstanding, and the customer service team went above and beyond to ensure I had a great experience. It's rare to find a company that genuinely cares about its customers as much as they do about their product. I've noticed a significant improvement in, and it's made a huge difference in my . ",
    imgSrc: "/testimonial.png",
  },
  {
    id: 4,
    name: "Sara Ahmed",
    location: "Ajman",
    message:
      "The quality is outstanding, and the customer service team went above and beyond to ensure I had a great experience. It's rare to find a company that genuinely cares about its customers as much as they do about their product. I've noticed a significant improvement in, and it's made a huge difference in my . ",
    imgSrc: "/testimonial.png",
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:px-[120px] px-10 py-10 flex flex-col gap-5 bg-[#F5F5F7]">
      <h1 className="md:text-3xl text-xl font-semibold text-center my-5">
        What our Customers Say
      </h1>
      <Slider {...settings}>
        {testimonials.map((x, index) => (
          <TestimonialCard
            key={x.id}
            active={index === activeIndex ? "scale-105" : "scale-90 opacity-60"}
            quote={x.message}
            name={x.name}
            place={x.location}
          />
        ))}
        {/* Add more <TestimonialCard /> components as needed */}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 z-10"
      onClick={onClick}
    >
      →
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 z-10"
      onClick={onClick}
    >
      ←
    </div>
  );
};

export default Testimonials;

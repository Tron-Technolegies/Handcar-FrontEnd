import React, { useState, useRef } from "react";
import "../testimonials/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    name: "Ahmed R",
    location: "Abu Dubai",
    message:
      "Excellent service from Handcar. I ordered seat covers and floor mats, and they arrived on time with perfect fitting. The quality is much better than what I found in local shops. Highly recommended for anyone in Abu Dhabi looking for genuine accessories.",
    imgSrc: "/testimonial.png",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Khalid K",
    location: "Dubai",
    message:
      "Handcar made it very easy to find the right spare parts using the chassis number search. The team confirmed compatibility before shipping and the parts were delivered within two days. Very professional service and great communication.",
    imgSrc: "/testimonial.png",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Mohammed",
    location: "UAE",
    message:
      "I booked a painting and fitting service through Handcar. The workmanship is outstanding, and they completed the job ahead of schedule. My car looks brand new again. Definitely my go-to place for car care in the UAE.",
    imgSrc: "/testimonial.png",
    rating: 3.2,
  },
  {
    id: 4,
    name: "Faizal M",
    location: "Abu Dhabi",
    message:
      "I had a great experience shopping from Handcar. The prices are reasonable, products are high quality, and customer support is always responsive. I will be coming back for more accessories and recommending them to my friends in Abu Dhabi.",
    imgSrc: "/testimonial.png",
    rating: 2.7,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const wheelTimeoutRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setActiveIndex(next),

    // Scroll/drag related - keep design the same but enable scroll interactions
    draggable: true, // mouse drag on desktop
    swipeToSlide: true, // swipe a little and it'll snap to nearest slide
    touchMove: true, // allow touch gestures
    pauseOnHover: true,
    accessibility: true,
    // keep arrows if you like (they were not used in your main component), you can pass custom ones below
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Convert vertical wheel movement into slider navigation when pointer is over the slider.
  const handleWheel = (e) => {
    if (!sliderRef.current) return;
    // throttle so wheel doesn't trigger too many jumps
    if (wheelTimeoutRef.current) return;
    if (e.deltaY > 0) sliderRef.current.slickNext();
    else sliderRef.current.slickPrev();

    wheelTimeoutRef.current = setTimeout(() => {
      wheelTimeoutRef.current = null;
    }, 220); // adjust throttle duration if needed
  };

  return (
    <div className="lg:px-[120px] px-10 pt-10 pb-20 flex flex-col gap-5 bg-[#F5F5F7]">
      <h4 className="md:text-3xl text-xl font-semibold text-center my-5">Customer Reviews</h4>

      {/* attach onWheel to the wrapper so vertical wheel/drags convert to horizontal slides */}
      <div onWheel={handleWheel} style={{ position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((x, index) => (
            <div key={x.id}>
              <TestimonialCard
                active={index === activeIndex ? "scale-105" : "scale-90 opacity-60"}
                quote={x.message}
                name={x.name}
                place={x.location}
                rating={x.rating}
              />
            </div>
          ))}
        </Slider>
      </div>
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

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import handcarservices_header from "../../../assets/handcarservices_header.png";
import painting_accessories from "../../../assets/painting_accessories.png";
import washing_accessories from "../../../assets/washing_accessories.png";
import tyre_accessories from "../../../assets/tyre_accessories.png";
import HandCarServicesSliderCard from "./HandCarServicesSliderCard";
const HandCarServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="lg:px-[120px] px-10 py-10 flex flex-col gap-5">
      <div className="flex flex-col gap-4 items-center">
        <h4 className="text-3xl font-semibold">Handcar Car Services </h4>
        <p className="font-semibold">
          We Deliver Comprehensive Car Solutions! Explore Our Range of Services
        </p>
      </div>
      <div className="red-gradient p-10 rounded-lg">
        <Slider {...settings}>
          <HandCarServicesSliderCard
            image={painting_accessories}
            content={"Car Painting Services"}
          />
          <HandCarServicesSliderCard
            image={washing_accessories}
            content={"Car Washing Services"}
          />
          <HandCarServicesSliderCard
            image={tyre_accessories}
            content={"Tyre Services"}
          />
          <HandCarServicesSliderCard
            image={painting_accessories}
            content={"Interior Detailing"}
          />
        </Slider>
      </div>
    </div>
  );
};

export default HandCarServices;

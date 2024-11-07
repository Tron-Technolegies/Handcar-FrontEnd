import React from "react";
import { useRef } from "react";
import "../handcarServices/HandCarServices.css";
import handcarservices_header from "../../../assets/handcarservices_header.png";
import painting_accessories from "../../../assets/painting_accessories.png";
import washing_accessories from "../../../assets/washing_accessories.png";
import tyre_accessories from "../../../assets/tyre_accessories.png";
const HandCarServices = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250;
      const container = scrollContainerRef.current;

      if (direction === "left") {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="handcar-services-container">
      <div className="handcar-services">
        <div className="handcar-services-heading">
          <h1>Hand Car Services</h1>
          <p>
            We Deliver Comprehensive Car Solutions! Explore Our Range of
            Services
          </p>
        </div>
      </div>

      <div className="services-scroll-wrapper">
        <div className="various-handcar-services">
          <button
            className="scroll-button left"
            onClick={() => scroll("left")}
            aria-label="Previous"
          >
            &#8249;
          </button>

          <div className="services-scroll-container" ref={scrollContainerRef}>
            <div className="car-service">
              <div className="service-image">
                <img src={painting_accessories} alt="Car painting" />
              </div>
              <h3>Car Painting Services</h3>
            </div>

            <div className="car-service">
              <div className="service-image">
                <img src={washing_accessories} alt="Car washing" />
              </div>
              <h3>Car Washing Services</h3>
            </div>

            <div className="car-service">
              <div className="service-image">
                <img src={tyre_accessories} alt="Tyre services" />
              </div>
              <h3>Tyre Services</h3>
            </div>

            <div className="car-service">
              <div className="service-image">
                <img src={painting_accessories} alt="Interior detailing" />
              </div>
              <h3>Interior Detailing</h3>
            </div>
          </div>

          <button
            className="scroll-button right"
            onClick={() => scroll("right")}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HandCarServices;

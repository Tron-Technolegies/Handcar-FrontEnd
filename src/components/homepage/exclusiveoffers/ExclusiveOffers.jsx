import React from "react";
import "./ExclusiveOffers.css";
import exclusive_offer_coverimg from "../../../assets/exclusive_offer_coverimg.png";

const ExclusiveOffers = () => {
  return (
    <div className="offers-scroll-container">
      <div className="container">
        <div className="responsive-div">
          <div className="offer-content-container">
            <div className="offer-content">
              <span className="exclusive-tag">Exclusive</span>
              <h1 className="offer-title">
                WEEKEND <br /> OFFER
              </h1>
              <p className="offer-subtitle">Flat 10% off on accessories</p>
              <div className="offer-code">
                Use Code: <span className="code">WKNOFR10</span>
              </div>
            </div>
            <div className="offer-image">
              <img src={exclusive_offer_coverimg} alt="Car accessories" />
            </div>
          </div>
        </div>
        <div className="responsive-div second-exclusive-offer">
          <div className="offer-content-container">
            <div className="offer-content">
              <span className="exclusive-tag">Exclusive</span>
              <h1 className="offer-title">
                FREE CAR <br /> SERVICE
              </h1>
              <div className="free_car_service">
                <p>
                  On every purchase above <br /> AED100
                </p>
              </div>
            </div>
            <div className="offer-image">
              <img src={exclusive_offer_coverimg} alt="Car accessories" />
            </div>
          </div>
        </div>
        <div className="responsive-div second-exclusive-offer">
          <div className="offer-content-container">
            <div className="offer-content">
              <span className="exclusive-tag">Exclusive</span>
              <h1 className="offer-title">
                FREE CAR <br /> SERVICE
              </h1>
              <div className="free_car_service">
                <p>
                  On every purchase above <br /> AED100
                </p>
              </div>
            </div>
            <div className="offer-image">
              <img src={exclusive_offer_coverimg} alt="Car accessories" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;

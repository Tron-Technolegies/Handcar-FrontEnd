import React from "react";
import "../guaranteedfeatures/GuaranteedFeatures.css";
import handCarlogo from "../../../assets/handcar_logo.svg";
const GuaranteedFeatures = () => {
  return (
    <div className="guaranteed_features_container">
      <div className="guaranteed_features">
        <div className="guaranteed_features_content ">
          <img src={handCarlogo} alt="" className="lg:block hidden" />
          <h1 className="text-xl font-semibold">Handcar Guaranteed</h1>
        </div>

        <div className="first_guaranteed_feature guaranteed_feature_box ">
          <h1 className="guaranteed_feature_heading">
            Free pickup & <br />
            drop
          </h1>
        </div>

        <div className="first_guaranteed_feature guaranteed_feature_box second_guaranteed_feature ">
          <div className="first_feature_heading">
            <h1 className="guaranteed_feature_heading">
              Genuine <br />
              parts
            </h1>
          </div>
        </div>

        <div className="first_guaranteed_feature guaranteed_feature_box third_feature">
          <h1 className="guaranteed_feature_heading">
            Affordable <br />
            price
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GuaranteedFeatures;

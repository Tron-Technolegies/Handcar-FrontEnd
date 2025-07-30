import React from "react";
import "../guaranteedfeatures/GuaranteedFeatures.css";
import handCarlogo from "../../../assets/handcar_logo.svg";

const GuaranteedFeatures = () => {
  return (
    <div className="guaranteed_features_container">
      <div className="guaranteed_features">
        {/* Logo + Heading */}
        <div className="guaranteed_features_content">
          <img src={handCarlogo} alt="Handcar Logo" />
          <h1 className="text-xl font-semibold">Handcar Guaranteed</h1>
        </div>

        {/* Scrollable Cards on Mobile */}
        <div className="features_scroll_container">
          <div className="features_wrapper">
            <div className="guaranteed_feature_box first_guaranteed_feature">
              <h1 className="guaranteed_feature_heading">
                Free pickup & <br />
                drop
              </h1>
            </div>

            <div className="guaranteed_feature_box second_guaranteed_feature">
              <h1 className="guaranteed_feature_heading">
                Genuine <br />
                parts
              </h1>
            </div>

            <div className="guaranteed_feature_box third_feature">
              <h1 className="guaranteed_feature_heading">
                Affordable <br />
                price
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteedFeatures;

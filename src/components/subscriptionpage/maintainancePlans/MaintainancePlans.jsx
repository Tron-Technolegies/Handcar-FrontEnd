import React from 'react'
import "../maintainancePlans/MaintainancePlans.css"
import subscriptionpage_underline from "../../../assets/subscriptionpage_underline.svg";
import maintainance_page_header_img from "../../../assets/maintainance_page_header_img.svg";
import { TiTick } from "react-icons/ti";
const MaintainancePlans = () => {
  return (
    <div className='maintainance_plans_container'>
         <div className="maintainancepage_header_img">
            <img src={maintainance_page_header_img} alt="" srcset="" />
        </div>
      <div className="subscriptionplans_content">
       
        <div className="subscription_heading">
          <h1>Plans for Maintainance Services</h1>
          <img
            src={subscriptionpage_underline}
            alt=""
            srcset=""
            className="subscription_underline"
          />
        </div>
        <p>
        Explore our subscription plans for additional services and keep your car looking its best year- <br />round. Enjoy exclusive benefits and regular maintenance with our comprehensive packages.
        </p>
        <div className="subscriptionpage_buttons maintainancepage_buttons">
          <button className="sub_sixmonth maintainance_sixmonth">6 months</button>
          <button className="sub_twelvemonth">12 months</button>
        </div>
        <p>
          <span className="sub_offer">save 10% off </span>on 6 month
          subscription
        </p>
      </div>

      <div className="subscription_plan maintainanace_plan">
        {/* Basic Plan */}
        <div className="basic_plan">
          <div className="plan_tittle">
            <p>Basic</p>
          </div>

          <div className="plan_price">
            <h1>AED 299</h1>
            <p>/month</p>
          </div>

          <div className="plan_features">
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>
                  Unlimited Synthetic oil changes
                </p>
              </div>
            </div>
            <br />

            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>Seasonal tire rotations</p>
              </div>
            </div>
            <br /> <br /> <br /> <br /> 

            <div className="subscription_discounts">
              <p>Multiple Cars Discount</p>

              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">1</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>Full Price</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">2</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>10% off/car</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">3</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>20% off/car</p>
                </div>
              </div>
            </div>
            <button className="plan_subscribe_btn">Subscribe</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="basic_plan">
          <div className="plan_tittle">
            <p>Premium</p>
          </div>

          <div className="plan_price">
            <h1>AED 599</h1>
            <p>/month</p>
          </div>

          <div className="plan_features">
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>
                All Basic Maintenance Plan services
                </p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>Brake pad replacements</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>Battery check and replacement</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>Fluid top-offs</p>
              </div>
            </div>

            <div className="subscription_discounts">
              <p>Multiple Cars Discount</p>

              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">1</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>Full Price</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">2</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>10% off/car</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">3</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>20% off/car</p>
                </div>
              </div>
            </div>
            <button className="plan_subscribe_btn">Subscribe</button>
          </div>
        </div>

        {/* Luxury Plan */}
        <div className="basic_plan">
          <div className="plan_tittle">
            <p>Luxury</p>
          </div>

          <div className="plan_price">
            <h1>AED 749</h1>
            <p>/month</p>
          </div>

          <div className="plan_features">
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>
                  Unlimited Exterior wash using high- <br />
                  pressure sprays Interior vacuuming
                </p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>cleaning of windows and mirrors</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>Polishing and waxing services</p>
              </div>
            </div>
            <br />
            <div className="plan_feature_points">
              <div className="plan_feature_icon">
                <TiTick />
              </div>

              <div className="plan_feature_content">
                <p>Interior and upholstery shampooing</p>
              </div>
            </div>

            <div className="subscription_discounts">
              <p>Multiple Cars Discount</p>

              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">1</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>Full Price</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">2</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>10% off/car</p>
                </div>
              </div>
              <div className="subscription_plans_and_discounts">
                <div className="number_of_plans">
                  <div className="plan_number">3</div>
                  <div className="plan_detail">
                    <p>Car Plan</p>
                  </div>
                </div>
                <div className="plan_discount">
                  <p>20% off/car</p>
                </div>
              </div>
            </div>
            <button className="plan_subscribe_btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaintainancePlans

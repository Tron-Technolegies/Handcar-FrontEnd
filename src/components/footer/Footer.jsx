import React from "react";
import "../footer/Footer.css";
import handcar_logo from "../../assets/handcar_logo.svg";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_logo">
          <img src={handcar_logo} alt="" srcset="" />
        </div>

        <div className="footer_contents text-[#979797]">
          <li>
            <a href="">Spare parts</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
          <li>
            <a href="">Terms&Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </div>
      </div>
      <div className="contact_num_and_address">
        <li>+97123456789</li>
        <li>Address goes here</li>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  function handleAboutClick() {
    if (location.pathname === "/") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  function handleContactClick() {
    if (location.pathname === "/") {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
  return (
    <footer className="bg-black lg:px-[120px] py-10 px-10 flex sm:flex-row flex-col justify-between sm:items-center items-start gap-7">
      <img src="/footer-logo.png" className="w-10" />
      <div className="text-[#979797] flex flex-col gap-5">
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/spareparts"}>Spare Parts</Link>
          <Link to={"/servicepage"}>Services</Link>
          <a className="cursor-pointer" onClick={handleAboutClick}>
            About Us
          </a>
          <a className="cursor-pointer" onClick={handleContactClick}>
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-3">
            <span>
              <FaPhoneAlt />
            </span>
            +971544463803
          </p>
          <p className="flex items-center gap-3">
            <span>
              <IoLocationOutline />
            </span>
            Based on AbuDhabi, UAE
          </p>
        </div>
        <p className="text-xs">© 2025 Handcar. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

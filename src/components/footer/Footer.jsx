import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  return (
    <footer className="text-[#979797] font-sans">
      <div className="bg-black lg:px-[120px] px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left */}
          <div className="flex flex-col gap-4 max-w-md">
            <img src="/footer-logo.png" className="w-14" alt="Logo" />
            <p className="text-sm">
              Handcar offers high quality car accessories, spare parts, and auto services in Abu
              Dhabi, UAE. Shop online for interior upgrades, exterior detailing, painting, and
              fitting services all in one trusted platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 min-w-[150px]">
            <h4 className="text-white font-semibold text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/spareparts">Spare Parts</Link>
              </li>
              <li>
                <Link to="/servicepage">Services</Link>
              </li>
              <li>
                <a className="cursor-pointer" onClick={handleAboutClick}>
                  About Us
                </a>
              </li>
              <li>
                <a className="cursor-pointer" onClick={handleContactClick}>
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-sm ">
            <h4 className="text-white font-semibold">Contact Us</h4>
            <a href="tel:+971544463803" className="flex items-center gap-2">
              <FaPhoneAlt /> +971 54446 3803
            </a>
            <a href="mailto:info@handcar.com" className="flex items-center gap-2">
              <MdEmail /> info@handcar.com
            </a>
            <p className="flex items-center gap-2">
              <IoLocationOutline /> Based in Abu Dhabi, UAE
            </p>
            <div className="mt-4">
              <h4 className="text-white font-semibold text-sm mb-2">Follow Us</h4>
              <div className="flex gap-4 text-xl">
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* App & Social */}
          <div className="flex flex-col min-w-[200px]">
            <h4 className="text-white font-semibold text-sm">Download Our App</h4>
            <div className="flex gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.handcar" target="_blank">
                <img
                  src="/icons/google-play-badge-logo-svgrepo-com.svg"
                  alt="Google Play"
                  className="w-32"
                />
              </a>
              <a href="https://apps.apple.com/app/handcar" target="_blank">
                <img
                  src="/icons/download-on-the-app-store-apple-logo-svgrepo-com.svg"
                  alt="App Store"
                  className="w-32"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Red Bottom Bar */}
      <div className="bg-red-600 text-white px-6 lg:px-[70px] py-4 items-center ">
        <p className="text-sm text-center  ">© 2025 Handcar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

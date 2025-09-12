import React, { useState, useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import handcar_logo from "../../assets/handcar_logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import SmallHeader from "./SmallHeader";
import { UserContext } from "../../UserContext";
import MenuDropdown from "./MenuDropdown";
import useGetSubscriptionStatus from "../../hooks/plans/useGetSubscriptionStatus";

const Header = () => {
  const [showSmallBar, setShowSmallBar] = useState(false);
  const { setShowLogin, setShowSignup, user } = useContext(UserContext);
  const { data } = useGetSubscriptionStatus();

  const navigate = useNavigate();
  const location = useLocation();

  function handleScrollToId(e, id) {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#" + id);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }

  return (
    <nav className="lg:px-[120px] py-5 px-10 bg-white flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={handcar_logo} alt="logo" className="w-[44px] h-[55px]" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="lg:flex hidden xl:gap-5 gap-3 items-center xl:text-lg text-base font-semibold">
        <NavLink to="/">Home</NavLink>

        {user && data?.subscribed ? (
          <NavLink to="/myplan">My Plan</NavLink>
        ) : (
          <NavLink to="/subscription">Subscribe</NavLink>
        )}

        <NavLink to="/accessories">Accessories</NavLink>
        <NavLink to="/spareparts">Spare Parts</NavLink>
        <NavLink to="/servicepage">Services</NavLink>

        {/* SEO-friendly About / Contact */}
        <a href="/#about" onClick={(e) => handleScrollToId(e, "about")} className="cursor-pointer">
          About Us
        </a>
        <a
          href="/#contact"
          onClick={(e) => handleScrollToId(e, "contact")}
          className="cursor-pointer"
        >
          Contact Us
        </a>
      </div>

      {/* Right Side */}
      <div className="flex xl:gap-5 gap-3 items-center">
        {/* Wishlist + Cart */}
        <div className="flex gap-2 items-center text-2xl">
          <Link to="/wishlist">
            <CiHeart />
          </Link>
          <Link to="/cart">
            <CiShoppingCart />
          </Link>
        </div>

        {/* Auth Buttons or Dropdown */}
        {user ? (
          <MenuDropdown user={user} />
        ) : (
          <>
            <button
              className="px-4 py-2 rounded-lg bg-white border hidden lg:block border-black"
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-black hidden lg:block text-white border"
              onClick={() => setShowSignup(true)}
            >
              Sign up
            </button>
          </>
        )}

        {/* Mobile Hamburger */}
        <div className="lg:hidden text-xl" onClick={() => setShowSmallBar(!showSmallBar)}>
          <RxHamburgerMenu />
        </div>
      </div>

      {/* Small Screen Header */}
      {showSmallBar && (
        <div className="absolute w-full top-20 left-0 z-20 animate-slideInTop">
          <SmallHeader
            setSmallBar={setShowSmallBar}
            setShowPopup={setShowLogin}
            handleScrollToId={handleScrollToId} // pass scroll handler for mobile
          />
        </div>
      )}
    </nav>
  );
};

export default Header;

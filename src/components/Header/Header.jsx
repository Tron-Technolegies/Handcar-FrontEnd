import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import handcar_logo from "../../assets/handcar_logo.svg";
import { IoIosLogOut } from "react-icons/io";
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
    <nav className="lg:px-[120px] py-5 px-10 bg-white flex justify-between items-center">
      <div>
        <img src={handcar_logo} alt="logo" className="w-[44px] h-[55px]" />
      </div>

      <div className="lg:flex hidden xl:gap-5 gap-3 items-center xl:text-lg text-base font-semibold">
        <NavLink to={"/"}>Home</NavLink>

        {user && data?.subscribed ? (
          <NavLink to="/myplan">My Plan</NavLink>
        ) : (
          <NavLink to="/subscription">Subscribe</NavLink>
        )}

        <NavLink to="/accessories">Accessories</NavLink>
        <NavLink to="/spareparts">Spare Parts</NavLink>
        <NavLink to="/servicepage">Services</NavLink>
        <a className="cursor-pointer" onClick={handleAboutClick}>
          About Us
        </a>
        <a className="cursor-pointer" onClick={handleContactClick}>
          Contact Us
        </a>
      </div>

      <div className="flex xl:gap-5 gap-3 items-center">
        <div className="flex gap-2 items-center text-2xl">
          <Link to="/wishlist">
            <CiHeart />
          </Link>
          <Link to="/cart">
            <CiShoppingCart />
          </Link>
        </div>

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

        <div className="lg:hidden text-xl" onClick={() => setShowSmallBar(!showSmallBar)}>
          <RxHamburgerMenu />
        </div>
      </div>

      {showSmallBar && (
        <div className="absolute w-full top-20 left-0 z-20 animate-slideInTop">
          <SmallHeader setSmallBar={setShowSmallBar} setShowPopup={setShowLogin} />
        </div>
      )}
    </nav>
  );
};

export default Header;

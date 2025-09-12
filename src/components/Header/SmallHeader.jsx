import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useLogout from "../../hooks/auth/useLogout";

export default function SmallHeader({ setSmallBar, setShowPopup }) {
  const { user } = useContext(UserContext);
  const { logoutUser } = useLogout();

  const location = useLocation();
  const navigate = useNavigate();

  function handleScrollToId(e, id) {
    e.preventDefault();
    setSmallBar(false);

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
    <div className="lg:hidden w-full bg-white py-5">
      <div className="flex flex-col gap-5 items-start px-10">
        {user && <p>Hello {user.first_name}</p>}

        <NavLink to="/" className="border-b w-full py-2" onClick={() => setSmallBar(false)}>
          Home
        </NavLink>

        <NavLink
          to="/subscription"
          className="border-b w-full py-2"
          onClick={() => setSmallBar(false)}
        >
          Subscribe
        </NavLink>

        <NavLink
          to="/accessories"
          className="border-b w-full py-2"
          onClick={() => setSmallBar(false)}
        >
          Accessories
        </NavLink>

        <NavLink
          to="/spareparts"
          className="border-b w-full py-2"
          onClick={() => setSmallBar(false)}
        >
          Spare Parts
        </NavLink>

        <NavLink
          to="/servicepage"
          className="border-b w-full py-2"
          onClick={() => setSmallBar(false)}
        >
          Services
        </NavLink>

        {/* SEO-friendly About / Contact */}
        <a
          href="/#about"
          className="border-b w-full py-2"
          onClick={(e) => handleScrollToId(e, "about")}
        >
          About Us
        </a>
        <a
          href="/#contact"
          className="border-b w-full py-2"
          onClick={(e) => handleScrollToId(e, "contact")}
        >
          Contact Us
        </a>

        {!user ? (
          <button
            onClick={() => setShowPopup(true)}
            className="rounded-lg px-3 py-2 bg-black text-white hover:py-[10px]"
          >
            Login/SignUp
          </button>
        ) : (
          <button
            onClick={logoutUser}
            className="rounded-lg px-3 py-2 bg-black text-white hover:py-[10px]"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

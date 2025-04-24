import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useLogout from "../../hooks/auth/useLogout";

export default function SmallHeader({ setSmallBar, setShowPopup }) {
  const { user } = useContext(UserContext);
  const { logoutUser } = useLogout();
  return (
    <div className="lg:hidden w-full bg-white py-5">
      <div className="flex flex-col gap-5 items-start px-10">
        {user && <p>Hello {user.first_name}</p>}
        <NavLink
          to={"/"}
          className={"border-b w-full py-2 "}
          onClick={() => setSmallBar(false)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/subscription"}
          className={"border-b w-full py-2"}
          onClick={() => setSmallBar(false)}
        >
          Subscribe
        </NavLink>
        <NavLink
          to={"/accessories"}
          className={"border-b w-full py-2"}
          onClick={() => setSmallBar(false)}
        >
          Accessories
        </NavLink>
        <NavLink
          to={"/spareparts"}
          className={"border-b w-full py-2"}
          onClick={() => setSmallBar(false)}
        >
          Spare Parts
        </NavLink>
        <NavLink
          to={"/servicepage"}
          className={"border-b w-full py-2"}
          onClick={() => setSmallBar(false)}
        >
          Services
        </NavLink>
        <p
          className={"border-b w-full py-2"}
          onClick={() => setSmallBar(false)}
        >
          About Us
        </p>
        <p
          className={"border-b w-full py-2"}
          onClick={() => setSmallBar(false)}
        >
          Contact Us
        </p>
        {!user ? (
          <button
            onClick={() => setShowPopup(true)}
            className="rounded-lg px-3 py-2 bg-black text-white hover:py-[10px]"
          >
            Login/SignUp
          </button>
        ) : (
          <button
            onClick={() => logoutUser()}
            className="rounded-lg px-3 py-2 bg-black text-white hover:py-[10px]"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

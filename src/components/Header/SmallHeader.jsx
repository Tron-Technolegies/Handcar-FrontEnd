import React from "react";
import { NavLink } from "react-router-dom";

export default function SmallHeader({ setSmallBar, setShowPopup }) {
  return (
    <div className="lg:hidden w-full bg-white py-5">
      <div className="flex flex-col gap-5 items-start px-10">
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
        <button
          onClick={() => setShowPopup(true)}
          className="rounded-lg px-3 py-2 bg-black text-white hover:py-[10px]"
        >
          Login/SignUp
        </button>
      </div>
    </div>
  );
}

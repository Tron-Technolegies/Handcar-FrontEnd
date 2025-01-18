import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";

export default function ServiceElt({ icon, content }) {
  const { activeServiceCategory, setActiveServiceCategory } =
    useContext(UserContext);
  return (
    <button
      onClick={() => setActiveServiceCategory(content)}
      className={`bg-[#F5F5F7] P-5 w-[256px] h-[168px] flex flex-col justify-center items-center gap-5 rounded-xl ${
        activeServiceCategory === content && "bg-red-400"
      }`}
    >
      <img src={icon}></img>
      <p className="text-xl font-medium">{content}</p>
    </button>
  );
}

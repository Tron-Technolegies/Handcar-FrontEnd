import React from "react";

export default function ServiceElt({ icon, content }) {
  return (
    <div className="bg-[#F5F5F7] P-5 w-[256px] h-[168px] flex flex-col justify-center items-center gap-5 rounded-xl">
      <img src={icon}></img>
      <p className="text-xl font-medium">{content}</p>
    </div>
  );
}

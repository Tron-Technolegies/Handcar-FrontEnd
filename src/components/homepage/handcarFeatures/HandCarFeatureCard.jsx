import React from "react";

export default function HandCarFeatureCard({ content, button, image }) {
  return (
    <div className="bg-[#F2F2F2] p-5 rounded-lg relative flex flex-col justify-between gap-5 md:w-[330px] w-full">
      <p>{content}</p>
      <button className="bg-black rounded-lg px-4 py-2 text-white w-fit">
        {button}
      </button>
      <img
        src={image}
        className="absolute object-cover w-40 right-0 bottom-0"
      />
    </div>
  );
}

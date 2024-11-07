import React from "react";

export default function WhyChooseCard({ bg, img, stat, content }) {
  return (
    <div
      className={`relative p-5 ${bg} rounded-lg flex flex-col justify-center gap-5 text-white w-[250px] h-[150px]`}
    >
      <p className="font-bold text-3xl">{stat}</p>
      <p>{content}</p>
      <img
        src={img}
        className="w-[100px] h-[84px] absolute object-cover top-0 right-0 overflow-hidden"
      ></img>
    </div>
  );
}

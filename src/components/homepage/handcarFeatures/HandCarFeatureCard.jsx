import React from "react";
import { Link } from "react-router-dom";

export default function HandCarFeatureCard({
  content,
  button,
  image,
  type,
  action,
}) {
  return (
    <div className="bg-[#F2F2F2] p-5 rounded-lg relative flex flex-col justify-between gap-5 md:w-[330px] w-full">
      <p>{content}</p>
      {type === "button" && (
        <button
          onClick={action}
          className="bg-black rounded-lg px-4 py-2 text-white w-fit"
        >
          {button}
        </button>
      )}
      {type === "link" && (
        <Link
          to={action}
          className="bg-black rounded-lg px-4 py-2 text-white w-fit"
        >
          {button}
        </Link>
      )}

      <img
        src={image}
        className="absolute object-cover w-40 right-0 bottom-0"
      />
    </div>
  );
}

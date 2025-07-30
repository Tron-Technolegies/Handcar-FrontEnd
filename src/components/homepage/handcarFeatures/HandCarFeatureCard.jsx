import React from "react";
import { Link } from "react-router-dom";

const HandCarFeatureCard = ({
  title,
  description,
  buttonText,
  type,
  action,
  image,
  imageSize = "w-28 h-28 md:w-40 md:h-40",
  isLarge = false,
}) => {
  return (
    <div
      className={`bg-[#F2F2F2] rounded-lg p-6 ${
        isLarge ? "h-full" : "h-[48%]"
      } flex flex-col justify-between relative overflow-hidden`}
    >
      <div className="flex flex-col gap-2 z-10">
        <h3 className={`${isLarge ? "text-xl" : "text-lg"} font-semibold`}>{title}</h3>
        <p className={`${isLarge ? "text-base" : "text-sm"} text-gray-700`}>{description}</p>
        {type === "link" ? (
          <Link to={action} className="bg-black text-white px-4 py-2 rounded mt-4 w-fit">
            {buttonText}
          </Link>
        ) : (
          <button onClick={action} className="bg-black text-white px-4 py-2 rounded mt-4 w-fit">
            {buttonText}
          </button>
        )}
      </div>
      <img
        src={image}
        alt={title}
        className={`absolute bottom-0 right-0 object-contain ${imageSize}`}
      />
    </div>
  );
};

export default HandCarFeatureCard;

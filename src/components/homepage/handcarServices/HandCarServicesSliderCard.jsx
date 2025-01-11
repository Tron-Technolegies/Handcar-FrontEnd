import React from "react";

export default function HandCarServicesSliderCard({ image, content }) {
  return (
    <div className="p-5 flex flex-col items-center gap-5 bg-white rounded-md w-[300px]">
      <div className="bg-[#F5F5F7] rounded-lg p-3">
        <img src={image} className="w-56 h-[190px] object-cover" />
      </div>
      <p>{content}</p>
    </div>
  );
}

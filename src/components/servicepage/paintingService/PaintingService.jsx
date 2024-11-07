import React from "react";
import PaintingCard from "./PaintingCard";

export default function PaintingService({ setShowPopup }) {
  return (
    <div className="lg:px-[120px] py-10 px-10">
      <h4 className="text-xl font-semibold text-center">
        213 painting services around you
      </h4>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 my-10">
        <PaintingCard setShowPopup={setShowPopup} />
        <PaintingCard setShowPopup={setShowPopup} />
        <PaintingCard setShowPopup={setShowPopup} />
        <PaintingCard setShowPopup={setShowPopup} />
        <PaintingCard setShowPopup={setShowPopup} />
        <PaintingCard setShowPopup={setShowPopup} />
      </div>
    </div>
  );
}

import React from "react";

function CategoryIconElt({ img, name }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      <img src={img}></img>
      <h5>{name}</h5>
    </div>
  );
}

export default CategoryIconElt;

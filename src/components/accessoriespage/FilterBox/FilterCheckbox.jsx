import React from "react";

export default function FilterCheckbox({ name }) {
  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox"></input>
      <p>{name}</p>
    </div>
  );
}

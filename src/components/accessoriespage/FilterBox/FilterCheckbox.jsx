import React from "react";

export default function FilterCheckbox({ name, onChange, checked }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(name, e.target.checked)}
      ></input>
      <p>{name}</p>
    </div>
  );
}

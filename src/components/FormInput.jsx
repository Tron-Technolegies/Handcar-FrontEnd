import React from "react";

export default function FormInput({ type, placeholder, value, onchange }) {
  return (
    <div className="form-row">
      <div className="flex items-center">
        <input
          type={type}
          className="w-full py-1 px-3 rounded-lg bg-[#E1E1E1] border border-gray-300 text-gray-900 h-11"
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          required
        />
      </div>
    </div>
  );
}

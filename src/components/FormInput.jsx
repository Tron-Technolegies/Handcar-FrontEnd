import React from "react";

export default function FormInput({
  type = "text",
  placeholder,
  value,
  onChange,
  title,
}) {
  return (
    <div className="form-row">
      <div className="flex flex-col gap-1">
        {title && <label className="text-sm text-left">{title}</label>}
        <input
          type={type}
          className="w-full py-1 px-3 rounded-lg bg-[#E1E1E1] border border-gray-300 text-gray-900 h-11"
          placeholder={placeholder}
          value={value}
          onChange={onChange} 
          required
        />
      </div>
    </div>
  );
}

import React from "react";

export default function SearchBox() {
  return (
    <div className="flex gap-3 justify-end mb-10">
      <input
        className="px-3 py-2 rounded-lg bg-white "
        type="text"
        placeholder="search accessories"
      ></input>
      <button className="px-4 py-2 rounded-lg bg-black text-white">
        Search
      </button>
    </div>
  );
}

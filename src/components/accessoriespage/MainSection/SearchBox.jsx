import React, { useContext } from "react";
import { ProductContext } from "../../../ProductContext";

export default function SearchBox({ refetch }) {
  const { search, setSearch } = useContext(ProductContext);

  return (
    <div className="flex gap-3 justify-end mb-10">
      <input
        className="px-3 py-2 rounded-lg bg-white "
        type="text"
        placeholder="search accessories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 rounded-lg bg-black text-white"
      >
        Search
      </button>
      <button
        onClick={() => {
          refetch();
          setSearch("");
        }}
        className="px-4 py-2 rounded-lg bg-black text-white"
      >
        clear
      </button>
    </div>
  );
}

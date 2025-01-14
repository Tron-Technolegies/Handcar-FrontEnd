import React from "react";
import { CiSearch } from "react-icons/ci";
import MapComponent from "./Map";
import useGetLocationServices from "../../../hooks/vendorservices/useGetLocationServices";

export default function MapLocation() {
  const { loading, datas } = useGetLocationServices({
    lat: "10.5946",
    long: "76.0369",
  });
  return (
    <div className="lg:px-[120px] py-10 px-10 flex flex-col gap-5">
      <h4 className="text-3xl font-semibold text-center">
        Find Services Near You
      </h4>
      <div className="relative w-fit mx-auto">
        <input
          type="text"
          className="bg-[#F5F5F7] h-10 rounded-md px-2 py-1 w-[300px] outline-none"
          placeholder="Your Location"
        />
        <button className="absolute bg-black text-white text-2xl h-10 rounded-md px-4 right-0">
          <CiSearch />
        </button>
      </div>
      {/* <MapComponent /> */}
    </div>
  );
}

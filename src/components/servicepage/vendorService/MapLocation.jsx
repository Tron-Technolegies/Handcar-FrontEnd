import axios from "axios";
import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../../../UserContext";

export default function MapLocation() {
  const [place, setPlace] = useState("");
  const { setLocation } = useContext(UserContext);

  async function handleClick() {
    try {
      const res = await axios.get(
        `https://us1.locationiq.com/v1/search?key=pk.486d281a96ed6dc2b83178311cf07129&format=json&q=${place}`
      );
      const data = res.data[0];

      setLocation({ lat: data.lat, lng: data.lon });
    } catch (error) {
      setLocation({ lat: "", lng: "" });
      console.log(error.data);
    }
  }

  return (
    <div className="lg:px-[120px] py-10 px-10 flex flex-col gap-5">
      <h4 className="text-3xl font-semibold text-center">
        Find Services Near You
      </h4>
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-fit mx-auto">
          <input
            type="text"
            className="bg-[#F5F5F7] h-10 rounded-md px-2 py-1 w-[300px] outline-none"
            placeholder="Your Location"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <button
            className="absolute bg-black text-white text-2xl h-10 rounded-md px-4 right-0"
            onClick={() => handleClick()}
          >
            <CiSearch />
          </button>
        </div>
        <button
          className=" bg-black text-white text-sm h-8 rounded-md px-2 "
          onClick={() => {
            setLocation({ lat: "", lng: "" });
            setPlace("");
          }}
        >
          clear
        </button>
      </div>
      {/* <MapComponent /> */}
    </div>
  );
}

import { GoDotFill } from "react-icons/go";
import React from "react";

const highlights = [
  "SONY IMX415 NATIVE TRUE 4K ULTRA HD Powered by the next generation Sony IMX415 high sensitivity image sensor, 70mai Dash Cam 4K provides outstanding picture quality at the astonishing native resolution of 4K 3840x2160",
  "No upscaling or software simulated 4K, A800 catches and reproduces every pixel to the finest true 4K level so details (license plates, street signs, traffic lights, etc) get captured the way they are with no compromise",
  "3'' IPS SCREEN & 140° WIDE WIDE ANGEL 70mai Dash Cam 4K A800 comes equipped with a 3 IPS screen that you view your recordings with real-time speed, timestamp and GPS coordinate info all on the same large screen",
  "F1.8 aperture 140° wide FOV (Field of View) with 7 layers of glass lenses effectively enhances image/video brightness and reduces blind spots",
];

const specs = [
  { id: 1, name: "Colour Name", details: "A800S Front Cam Only" },
  { id: 2, name: "Model Number", details: "A800S" },
  { id: 3, name: "Colour Name", details: "A800S Front Cam Only" },
  { id: 4, name: "Colour Name", details: "A800S Front Cam Only" },
  { id: 5, name: "Colour Name", details: "A800S Front Cam Only" },
  { id: 6, name: "Colour Name", details: "A800S Front Cam Only" },
];

export default function SinglePageOverview() {
  return (
    <div className="lg:px-[120px] py-10 px-5">
      <div className="shadow-lg px-10 py-5 rounded-md border">
        <h4 className="text-xl font-semibold my-10">Overview</h4>
        <div className="flex gap-5 lg:flex-row flex-col items-start">
          <div className="lg:w-1/2 w-full">
            <p className="font-medium mb-5">Highlights</p>
            <div>
              {highlights.map((x, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <p className="mt-1">
                    <GoDotFill />
                  </p>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="font-medium mb-5">Specifications</p>
            <div className="flex flex-col gap-3">
              {specs.map((x) => (
                <div
                  key={x.id}
                  className="flex sm:text-base text-xs justify-between items-center"
                >
                  <p className="bg-[#EDEDED] px-4 py-2 rounded-md  sm:w-[150px] w-[120px]">
                    {x.name}
                  </p>
                  <p>{x.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

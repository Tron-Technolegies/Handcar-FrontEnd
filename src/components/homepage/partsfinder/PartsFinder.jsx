import React, { useState } from "react";

const PartsFinder = () => {
  const [number, setNumber] = useState("");

  function handleClick() {
    if (number === "") {
      alert("Please Enter the Chasis Number");
    } else {
      console.log(`My chasis number is ${number}. I would like to discover spare parts`);
      setNumber("");
    }
  }

  return (
    <div className="w-full h-auto bg-gradient-to-br from-red-400 via-red-500 to-red-600">
      <div className="lg:px-[120px] px-6 py-10 lg:py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          {/* Left Content */}
          <div className="flex flex-col gap-4 max-w-full text-center items-center mt-5 lg:text-left lg:items-start">
            <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-[42px] max-w-fit font-bold text-white leading-tight">
              Complete Car Service in Abu Dhabi Just One App
            </h1>
            <p className="text-xs sm:text-sm lg:text-base lg:max-w-[700px] leading-relaxed opacity-90 text-white text-justify lg:text-left">
              Handcar is a smart app that puts car service, spare parts, accessories, and
              subscriptions all in one place. With just a tap, you can book trusted maintenance,
              shop genuine parts, and upgrade your ride effortlessly.Handcar is your complete car
              care solution in Abu Dhabi.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.handcar"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/playstore.png" alt="Google Play Button" className="w-32 sm:w-36" />
              </a>
              <a href="https://apps.apple.com/app/handcar" target="_blank" rel="noreferrer">
                <img src="/icons/appstore.png" alt="App Store button" className="w-32 sm:w-36" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
            <img
              src="/hero-img.webp"
              alt="App Preview"
              className="w-full h-auto object-cover drop-shadow-lg "
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsFinder;

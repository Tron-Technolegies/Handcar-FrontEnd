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
      <div className="lg:px-[120px] px-6 py-4 lg:py-6">
        <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-6 mb-0">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 my-2 lg:my-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              Expert car service & repair in <br /> Abu Dhabi, UAE
            </h1>
            <p className="text-white text-sm lg:text-base leading-relaxed max-w-[550px] mb-4 opacity-90">
              We provide professional car service in Abu Dhabi and expert car maintenance in Abu Dhabi, using original parts and trained technicians to ensure your vehicle receives the highest level of care.
            </p>
            <button className="bg-white hover:bg-red-100 text-red-600 px-6 lg:px-8 py-2 lg:py-2.5 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Discover
            </button>
          </div>
          
          {/* Right side - Car Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-96 mr-90">
              <img 
                src="/hero-img.png"
                alt="Luxury Car"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Chassis number input section - Full width at bottom */}
        <p className="md:text-lg text-base max-w-[750px] font-semibold text-white text-center justify-center mx-auto mb-0">
          Enter your chassis number to find the right spare parts for your car.
        </p>
        <div className="flex items-center justify-center gap-2 lg:gap-3">
          <div className="flex md:flex-row flex-col gap-2 items-center">
            <input
              className="rounded-lg outline-none h-9 px-2 py-1 md:min-w-80 w-full text-center"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter chasis number"
            />
            <button
              className="bg-black md:w-fit w-full px-4 py-2 rounded-lg text-white"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsFinder;
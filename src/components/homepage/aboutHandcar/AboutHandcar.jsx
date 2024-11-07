import React from "react";
import "../aboutHandcar/AboutHandcar.css";
import black_car from "../../../assets/black_car.png";
const AboutHandcar = () => {
  return (
    <div
      id="about"
      className="flex lg:flex-row flex-col justify-between items-center lg:ps-[120px] ps-10 pe-10 lg:pe-0 py-10"
    >
      <div className="xl:max-w-[610px] max-w-[500px] flex flex-col gap-5">
        <h4 className="md:text-3xl text-xl font-semibold">About Handcar</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          urna nec velit dapibus, ac commodo purus vestibulum. Fusce
          sollicitudin, nunc in aliquam lacinia, leo dolor congue lacus, eget
          elementum nisl odio eget dolor. Nulla facilisi. In vel sagittis nulla,
          at condimentum metus. Aliquam erat volutpat. Phasellus aliquet, odio
          nec ornare congue, justo nulla dictum justo, eu ullamcorper purus
          risus eu massa. Vivamus lacinia, libero sed dictum consequat
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[#DB1215] font-extrabold text-4xl">100+</p>
            <p className="font-bold text-lg">Happy Customers</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#DB1215] font-extrabold text-4xl">500+</p>
            <p className="font-bold text-lg">Products Sold</p>
          </div>
        </div>
      </div>
      <div className="">
        <img src={black_car} className="hidden lg:block max-h-[700px]"></img>
        <img src="/car.png" className="lg:hidden"></img>
      </div>
    </div>
  );
};

export default AboutHandcar;

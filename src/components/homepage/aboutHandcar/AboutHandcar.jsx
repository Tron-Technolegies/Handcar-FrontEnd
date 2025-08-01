import React from "react";
import "../aboutHandcar/AboutHandcar.css";
import black_car from "../../../assets/black_car.png";

const AboutHandcar = () => {
  return (
    <div
      id="about"
      className="flex lg:flex-row flex-col justify-between items-center lg:ps-[120px] ps-10 pe-10 lg:pe-0 py-20"
    >
      <div className="xl:max-w-[610px] max-w-[500px] flex flex-col gap-5">
        <h3 className="md:text-3xl text-xl font-semibold">About us</h3>
        <div className="md:text-base text-sm text-justify space-y-4">
          <p>
            HandCar offers trusted <a href="https://handcar.ae/">car service in Abu Dhabi</a>, with
            even the smallest tasks including regular car maintenance, trust repairs and competitive
            agreement on other services include car painting. As people from Abu Dhabi and the UAE,
            we service those who appreciate their vehicles as performers and trust us to provide
            quality service, to communicate openly with them, and to provide them honest pricing.
          </p>
          <p>
            Our technicians will come with real experience with anything you need done for your
            vehicle, whether it is a minor repair, full diagnostic assessment or car body repair.
            When repairing your car we will ensure that we only use the best parts for the work we
            will be doing and we will have your car in the best possible condition, both inside and
            out.
          </p>
          <p>
            Essentially, we try to make it easy, so if you drive and want to keep your car running
            well, HandCar has a proven track record of satisfying customer results, with a mission
            and understanding of delivering a proper job the first time, as we are one of the most
            trusted <a href="https://handcar.ae/">car service centres in Abu Dhabi</a>. We thank the
            number of vehicle owners from the UAE that entrust us with their vehicles as we continue
            to improve our service to our community.
          </p>
        </div>

        <div className="flex justify-between pt-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#DB1215] font-extrabold text-4xl">100+</p>
            <p className="font-bold text-lg">Happy Customers</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#DB1215] font-extrabold text-4xl">500+</p>
            <p className="font-bold text-lg">Services Completed</p>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={black_car}
          className="hidden lg:block max-h-[700px]"
          alt="Professional car service in Abu Dhabi - HandCar automotive experts"
        />
        <img
          src="/car.png"
          className="lg:hidden"
          alt="HandCar - trusted car service centres in Abu Dhabi"
        />
      </div>
    </div>
  );
};

export default AboutHandcar;

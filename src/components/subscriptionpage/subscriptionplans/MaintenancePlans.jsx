import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import useGetCarWashPlans from "../../../hooks/plans/useGetCarWashPlans";
import Loading from "../../Loading";

export default function MaintenancePlans() {
  const [long, setLong] = useState(6);
  const [maintenancePlans, setMaintenancePlans] = useState([]);
  const { loading, plans } = useGetCarWashPlans();

  useEffect(() => {
    if (plans) {
      const filteredPlans = plans.filter(
        (x) => x.duration === "6" && x.service_type === "Maintenance"
      );
      setMaintenancePlans(filteredPlans);
    }
  }, [loading]);

  const handlefunction1 = () => {
    setLong(6);
    const filteredPlans = plans.filter(
      (x) => x.duration === "6" && x.service_type === "Maintenance"
    );
    setMaintenancePlans(filteredPlans);
  };
  const handlefunction2 = () => {
    setLong(12);
    const filteredPlans = plans.filter(
      (x) => x.duration === "12" && x.service_type === "Maintenance"
    );
    setMaintenancePlans(filteredPlans);
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="lg:px-[120px] px-10 py-10">
      <img
        src="/subs/img-1.png"
        className="w-full h-[330px] rounded-lg object-cover"
      ></img>
      <div className="max-w-[750px] flex flex-col gap-5 items-center mx-auto my-10">
        <h1 className="md:text-4xl text-2xl text-center font-semibold text-black">
          Plans for{" "}
          <span className="underline underline-offset-8">Maintainance</span>{" "}
          Services
        </h1>
        <p className="text-black text-sm text-center">
          Explore our subscription plans for additional services and keep your
          car looking its best year-round. Enjoy exclusive benefits and regular
          maintenance with our comprehensive packages.
        </p>
        <div className="bg-[#EEEEEE] px-2 py-2 rounded-s-full rounded-e-full flex items-center gap-5">
          <motion.button
            className={`text-black p-2 `}
            animate={{
              backgroundColor: long === 6 ? "#FFFFFF" : "#EEEEEE",
              borderRadius: long === 6 ? "999px" : "0px",
            }}
            transition={{ duration: 0.3 }}
            onClick={handlefunction1}
          >
            6 Months
          </motion.button>
          <motion.button
            className={`text-black p-2 `}
            animate={{
              backgroundColor: long === 12 ? "#FFFFFF" : "#EEEEEE   ",
              borderRadius: long === 12 ? "999px" : "0px",
            }}
            transition={{ duration: 0.3 }}
            onClick={handlefunction2}
          >
            12 Months
          </motion.button>
        </div>
        <p>
          <span className="text-[#1D9112]">Save 10% off </span>on 6 months
          subscription
        </p>
      </div>
      <div className="flex justify-center gap-7 my-10">
        {maintenancePlans.map((x) => (
          <PlanCard
            key={x.id}
            name={x.name}
            list={x.description
              .match(/<li>(.*?)<\/li>/g)
              .map((item) => item.replace(/<\/?li>/g, ""))}
            price={x.price}
          />
        ))}
      </div>
    </div>
  );
}

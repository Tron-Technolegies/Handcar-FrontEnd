import { motion } from "framer-motion";
import React, { useState } from "react";
import { carWashPlans, maintenancePlans } from "../../../utils/plans";
import PlanCard from "./PlanCard";
import SmallScreenPlanSwitcher from "./SmallScreenPlanSwitcher";

export default function MaintenancePlans() {
  const [long, setLong] = useState(6);
  const [type, setType] = useState("basic");
  return (
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
            onClick={() => setLong(6)}
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
            onClick={() => setLong(12)}
          >
            12 Months
          </motion.button>
        </div>
        <p>
          <span className="text-[#1D9112]">Save 10% off </span>on 6 months
          subscription
        </p>
        <SmallScreenPlanSwitcher type={type} setType={setType} />
      </div>
      <div className="my-10 flex justify-center lg:hidden">
        {type === "basic" && (
          <PlanCard
            name={maintenancePlans[0].name}
            list={maintenancePlans[0].list}
            price={maintenancePlans[0].price}
            popular={maintenancePlans[0].popular}
          />
        )}
        {type === "premium" && (
          <PlanCard
            name={maintenancePlans[1].name}
            list={maintenancePlans[1].list}
            price={maintenancePlans[1].price}
            popular={maintenancePlans[1].popular}
          />
        )}
        {type === "luxury" && (
          <PlanCard
            name={maintenancePlans[2].name}
            list={maintenancePlans[2].list}
            price={maintenancePlans[2].price}
            popular={maintenancePlans[2].popular}
          />
        )}
      </div>
      <div className="lg:flex justify-around my-10 hidden">
        {maintenancePlans.map((x) => (
          <PlanCard
            key={x.id}
            name={x.name}
            list={x.list}
            price={x.price}
            popular={x.popular}
          />
        ))}
      </div>
    </div>
  );
}

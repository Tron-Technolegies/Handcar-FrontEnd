import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { carWashPlans } from "../../../utils/plans";
import PlanCard from "./PlanCard";
import SmallScreenPlanSwitcher from "./SmallScreenPlanSwitcher";
import useGetCarWashPlans from "../../../hooks/plans/useGetCarWashPlans";
import Loading from "../../Loading";

export default function CarWashPlans() {
  const [long, setLong] = useState(6);
  const [washPlans, setWashPlans] = useState([]);
  const { loading, plans } = useGetCarWashPlans();

  useEffect(() => {
    if (plans) {
      const filteredPlans = plans.filter(
        (x) => x.duration === "6" && x.service_type === "Car Wash"
      );
      setWashPlans(filteredPlans);
    }
  }, [loading]);

  const handlefunction1 = () => {
    setLong(6);
    const filteredPlans = plans.filter(
      (x) => x.duration === "6" && x.service_type === "Car Wash"
    );
    setWashPlans(filteredPlans);
  };
  const handlefunction2 = () => {
    setLong(12);
    const filteredPlans = plans.filter(
      (x) => x.duration === "12" && x.service_type === "Car Wash"
    );
    setWashPlans(filteredPlans);
  };
  return loading ? (
    <Loading />
  ) : (
    <div className="xl:px-[120px] px-10 py-10 bg-gradient-to-b from-[#D50104] to-40%">
      <div className="max-w-[750px] flex flex-col gap-5 items-center mx-auto">
        <h1 className="md:text-4xl text-2xl text-center font-semibold text-white">
          A Plan for Every{" "}
          <span className="underline underline-offset-8">Car Washing</span> Need
        </h1>
        <p className="text-white text-sm text-center">
          Whether it's a quick rinse or a detailed clean, we offer customized
          services to meet every car washing need. Experience the difference
          with our specialized care and attention to detail.
        </p>
        <div className="bg-[#FFD9D9] px-2 py-2 rounded-s-full rounded-e-full flex items-center gap-5">
          <motion.button
            className={`text-[#DA1E21] p-2 `}
            animate={{
              backgroundColor: long === 6 ? "#FFFFFF" : "#FFD9D9",
              borderRadius: long === 6 ? "999px" : "0px",
            }}
            transition={{ duration: 0.3 }}
            onClick={handlefunction1}
          >
            6 Months
          </motion.button>
          <motion.button
            className={`text-[#DA1E21] p-2 `}
            animate={{
              backgroundColor: long === 12 ? "#FFFFFF" : "#FFD9D9",
              borderRadius: long === 12 ? "999px" : "0px",
            }}
            transition={{ duration: 0.3 }}
            onClick={handlefunction2}
          >
            12 Months
          </motion.button>
        </div>
        <p>
          <span className="text-[#DA1E21]">Save 10% off </span>on 6 months
          subscription
        </p>
      </div>
      <div className="my-10 flex lg:flex-row flex-col items-center justify-center gap-7">
        {washPlans.map((x) => (
          <PlanCard
            key={x.id}
            name={x.name}
            price={x.price}
            list={x.description
              .match(/<li>(.*?)<\/li>/g)
              .map((item) => item.replace(/<\/?li>/g, ""))}
          />
        ))}
      </div>
    </div>
  );
}

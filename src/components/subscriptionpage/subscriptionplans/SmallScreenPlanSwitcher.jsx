import { motion } from "framer-motion";
import React from "react";

export default function SmallScreenPlanSwitcher({ type, setType }) {
  return (
    <div className="bg-[#FFD9D9] px-2 py-2 rounded-s-full rounded-e-full flex lg:hidden items-center gap-5">
      <motion.button
        className={`text-[#DA1E21] p-2 `}
        animate={{
          backgroundColor: type === "basic" ? "#FFFFFF" : "#FFD9D9",
          borderRadius: type === "basic" ? "999px" : "0px",
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setType("basic")}
      >
        Basic
      </motion.button>
      <motion.button
        className={`text-[#DA1E21] p-2 `}
        animate={{
          backgroundColor: type === "premium" ? "#FFFFFF" : "#FFD9D9",
          borderRadius: type === "premium" ? "999px" : "0px",
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setType("premium")}
      >
        Premium
      </motion.button>
      <motion.button
        className={`text-[#DA1E21] p-2 `}
        animate={{
          backgroundColor: type === "luxuary" ? "#FFFFFF" : "#FFD9D9",
          borderRadius: type === "luxuary" ? "999px" : "0px",
        }}
        transition={{ duration: 0.3 }}
        onClick={() => setType("luxuary")}
      >
        Luxury
      </motion.button>
    </div>
  );
}

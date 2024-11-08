import { motion } from "framer-motion";
import React from "react";
import { ImAttachment } from "react-icons/im";
import { IoClose } from "react-icons/io5";

export default function WriteReview({ setShowPopup }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowPopup(false)}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto flex flex-col gap-5 rounded-md items-center bg-white border border-[#A5A5A5] py-5"
      >
        <div className="w-full p-5 flex flex-col gap-3">
          <p
            className="ms-auto cursor-pointer"
            onClick={() => setShowPopup(false)}
          >
            <IoClose />
          </p>
          <h4 className="text-xl font-bold">Write a review</h4>
          <textarea
            className="bg-[#F6F6F6] rounded-md w-full p-3"
            rows={7}
            placeholder="write your review here"
          ></textarea>
          <label className="text-sm flex items-center gap-2 text-[#005DCB] cursor-pointer">
            <span>
              <ImAttachment />
            </span>
            Add Images
            <input type="file" hidden></input>
          </label>
          <button className="px-4 py-2 bg-black rounded-lg text-white border-2 hover:bg-white hover:text-black shadow-md">
            Submit Review
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

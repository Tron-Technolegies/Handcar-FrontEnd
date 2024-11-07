import React from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";
import ListItem from "./ListItem";

export default function PaintingServiceDetailPopup({ setShowPopup }) {
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
        className="xl:w-2/5 md:w-3/4 sm:w-3/4 w-11/12 mx-auto flex flex-col gap-5 popup-screen overflow-y-scroll items-center bg-white border border-[#A5A5A5] p-5"
      >
        <div className="flex justify-between items-center text-xl font-semibold w-full">
          <h5>ICON Rocklear Paint Solutions</h5>
          <p onClick={() => setShowPopup(false)} className="cursor-pointer">
            <RxCross2 />
          </p>
        </div>
        <img
          src="/services/painting.png"
          className="max-w-[563px] max-h-[251px] rounded-lg"
        ></img>
        <div className="flex justify-between w-full items-center">
          <p className="text-[#D60205] font-bold">Address</p>
          <p className="flex items-center gap-2 p-1 rounded-lg bg-[#F2F2F2]">
            <span className="text-[#FFB800]">
              <FaStar />
            </span>
            <span>4.0</span>
          </p>
        </div>
        <p className="text-lg w-full">
          M-33, MUSSAFAH , PLOT NO 26, STORE NO 2 POST BOX NO 37511 TEL:
          025544140 ABUDHABI google coordinates: 24°21'23.5°N 54°30'32.2°E - Abu
          Dhabi - United Arab Emirates
        </p>
        <p className="text-[#D60205] font-semibold w-full text-left">
          Services
        </p>
        <div className="w-full text-left">
          <ListItem content={"Air and cabin Filter replacement"} />
          <ListItem content={"Battery"} />
          <ListItem content={"Brakes"} />
          <ListItem content={"Air conditioning"} />
          <ListItem content={"Electrical"} />
          <ListItem content={"Vehicle engine diagnostic"} />
          <ListItem content={"Oil change"} />
          <ListItem content={"Steering and suspension repair"} />
          <ListItem content={"Transmission"} />
          <ListItem content={"A/C installation and repair"} />
          <ListItem content={"Vehicle A/C recharge"} />
          <ListItem content={"Vehicle A/C replacement"} />
          <ListItem content={"Vehicle battery maintenance"} />
          <ListItem content={"Vehicle battery replacement"} />
        </div>
        <p className="text-left me-auto font-semibold">AED 99/hr</p>
        <p className="flex gap-2 items-center bg-[#DAF2D6] border border-[#17A600] rounded-lg p-2 w-full ">
          <img src="/services/tick.png"></img>
          <span className="text-[#17A600]">20% discount coupon applied.</span>
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full place-items-center justify-center">
          <button className="flex gap-2 md:w-fit w-full justify-center items-center p-2 rounded-md border border-black">
            <img src="/services/whatsapp.png"></img>
            <span>Whatsapp Us</span>
          </button>
          <button className="flex gap-2 md:w-fit w-full justify-center items-center p-2 rounded-md border border-black">
            <img src="/services/mail.png"></img>
            <span>Mail Us</span>
          </button>
          <button className="flex gap-2 md:w-fit w-full justify-center items-center p-2 rounded-md border border-black ">
            <img src="/services/phone.png"></img>
            <span>Call Us</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

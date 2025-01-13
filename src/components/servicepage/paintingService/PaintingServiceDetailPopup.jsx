import React from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListItem from "./ListItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGetSingleService from "../../../hooks/vendorservices/useGetSingleService";
import Loading from "../../Loading";
import usePostLog from "../../../hooks/vendorservices/usePostLog";

export default function PaintingServiceDetailPopup() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, service } = useGetSingleService({ id });
  const { loading: logLoading, postLog } = usePostLog();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // centerMode: true,
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1,
  };

  async function handleWhatsapp({ action, service_id, phone }) {
    await postLog({ action, service_id });
    const phoneNumber = phone; // Replace with the actual phone number
    const message = "Hello! I would like to use your service"; // Replace with your message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  }

  async function handleCall({ action, service_id, phone }) {
    await postLog({ action, service_id });
    window.location.href = `tel:${phone}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => navigate("/servicepage")}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
    >
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="xl:w-2/5 md:w-3/4 sm:w-3/4 w-11/12 mx-auto flex flex-col gap-5 popup-screen overflow-y-scroll overflow-x-hidden items-center bg-white border border-[#A5A5A5] p-5 rounded-lg"
        >
          <div className="flex justify-between items-center text-xl font-semibold w-full">
            <h5>{service.vendor_name}</h5>
            <Link to={"/servicepage"} className="cursor-pointer">
              <RxCross2 />
            </Link>
          </div>
          <div className="w-full">
            <Slider {...settings}>
              {service?.images?.map((x) => (
                <img
                  key={x.id}
                  src={x}
                  className="max-w-[563px] max-h-[251px] w-64 object-cover rounded-lg"
                ></img>
              ))}
            </Slider>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-[#D60205] font-bold">Address</p>
            <p className="flex items-center gap-2 p-1 rounded-lg bg-[#F2F2F2]">
              <span className="text-[#FFB800]">
                <FaStar />
              </span>
              <span>4.0</span>
            </p>
          </div>
          <p className="text-lg w-full">{service.address}</p>
          <p className="text-[#D60205] font-semibold w-full text-left flex justify-between">
            Services
            <span className="text-black">{service.service_category}</span>
          </p>
          <div className="w-full text-left">
            <ListItem content={service.service_details} />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full place-items-center justify-center">
            <button
              onClick={() =>
                handleWhatsapp({
                  action: "WHATSAPP",
                  service_id: service.id,
                  phone: service.whatsapp_number,
                })
              }
              className="flex gap-2 md:w-fit w-full justify-center items-center p-2 rounded-md border border-black"
            >
              <img src="/services/whatsapp.png"></img>
              <span>Whatsapp Us</span>
            </button>
            <button
              onClick={() =>
                handleCall({
                  action: "CALL",
                  service_id: service.id,
                  phone: service.phone_number,
                })
              }
              className="flex gap-2 md:w-fit w-full justify-center items-center p-2 rounded-md border border-black "
            >
              <img src="/services/phone.png"></img>
              <span>Call Us</span>
            </button>
          </div>
          {logLoading && <Loading />}
          <div></div>
        </motion.div>
      )}
    </motion.div>
  );
}

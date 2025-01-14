import React, { useState } from "react";
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
import ReviewGraphElt from "../../accessoriespage/singlePage/ReviewGraphElt";
import SingleReview from "../../accessoriespage/singlePage/SingleReview";
import WriteServiceReview from "./reviews/WriteServiceReview";
import SingleServiceReview from "./reviews/SingleServiceReview";

export default function VendorServiceDetailPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, service } = useGetSingleService({ id });
  const { loading: logLoading, postLog } = usePostLog();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (2 seconds)
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

  return loading ? (
    <Loading />
  ) : (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="lg:px-[120px] pt-10 px-10 flex flex-col gap-5 items-center bg-white p-5 rounded-lg"
    >
      <div className="flex justify-between items-center text-xl font-semibold w-full">
        <h5>{service.vendor_name}</h5>
        <Link
          to={"/servicepage"}
          className="cursor-pointer bg-black text-white px-4 py-1 rounded-lg"
        >
          Go Back
        </Link>
      </div>
      <div className="w-full">
        <Slider {...settings} className="mx-auto">
          {service?.images?.map((x) => (
            <div key={x.id} className="flex justify-center">
              <img
                src={x}
                className="max-w-[563px] max-h-[251px] mx-auto object-cover rounded-lg"
              ></img>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-between w-full items-center">
        <p className="text-[#D60205] font-bold">Address</p>
      </div>
      <p className="text-lg w-full">{service.address}</p>
      <p className="text-[#D60205] font-semibold w-full text-left flex gap-5">
        Services
        <span className="text-black font-extralight">
          {service.service_category}
        </span>
      </p>
      <div className="w-full text-left">
        <ListItem content={service.service_details} />
      </div>
      <div className="w-full flex flex-col gap-3">
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
      <div className="py-10">
        <div className="flex justify-between flex-col shadow-lg px-10 py-5 rounded-md border">
          <div className="md:w-1/2 w-full">
            <p className="text-xl font-semibold my-5">
              Product Ratings & Reviews
            </p>
            <p className="font-medium mb-10">
              Have a review about this product?
              <span
                onClick={() => setShowPopup(true)}
                className="text-[#4069D8] cursor-pointer"
              >
                {" "}
                Write here
              </span>
            </p>
            <div className="flex flex-col gap-2">
              <h5 className="text-3xl font-bold">4.0</h5>
              <div className="flex gap-1">
                {Array.from({ length: 4 }).map((_, index) => (
                  <p key={index} className="text-[#FFB800]">
                    <FaStar />
                  </p>
                ))}
                <p className="text-[#DADADA]">
                  <FaStar />
                </p>
              </div>
              <p className="text-[#A7A7A7]">Based on 210 reviews</p>
              <div>
                <ReviewGraphElt
                  no={5}
                  clr={"text-[#5DAB33]"}
                  percent={57}
                  bg={"bg-[#5DAB33]"}
                />
                <ReviewGraphElt
                  no={4}
                  clr={"text-[#8CAC35]"}
                  percent={41}
                  bg={"bg-[#8CAC35]"}
                />
                <ReviewGraphElt
                  no={3}
                  clr={"text-[#E9AE4C]"}
                  percent={36}
                  bg={"bg-[#E9AE4C]"}
                />
                <ReviewGraphElt
                  no={2}
                  clr={"text-[#E37343]"}
                  percent={16}
                  bg={"bg-[#E37343]"}
                />
                <ReviewGraphElt
                  no={1}
                  clr={"text-[#EE5E20]"}
                  percent={4}
                  bg={"bg-[#EE5E20]"}
                />
              </div>
            </div>
          </div>
          <div className="grow w-full">
            <h4 className="text-xl font-semibold my-5">313 Reviews</h4>
            <div>
              <SingleServiceReview />
              <SingleServiceReview />
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <WriteServiceReview setShowPopup={setShowPopup} service_id={id} />
      )}
    </motion.div>
  );
}

import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { toast } from "react-toastify";
import { handleEnquiryFormClick } from "../../../utils/WhatsApp";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleClick() {
    if (name === "" || email === "" || phoneNumber === "" || message === "") {
      toast.warn("Please fill in all the fields");
    } else {
      handleEnquiryFormClick({ name, email, phone: phoneNumber, message });
      setName("");
      setEmail("");
      setMessage("");
      setPhoneNumber("");
    }
  }

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full bg-gray-50 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Contact Details Section */}
        <div className="lg:w-1/2 p-8 bg-gradient-to-br from-red-400 via-red-500 to-red-600 text-white">
          <h2 className="text-3xl font-bold text-center items-center my-16 mb-6">Get in Touch</h2>
          <p className="mb-8 text-gray-300">
            We're here to help with any questions about our car services in Abu Dhabi. Reach out via
            the form or our direct contacts below.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <CiLocationOn size={24} />
              </div>
              <p className="text-lg">Based in Abu Dhabi, UAE</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <MdOutlineForwardToInbox size={24} />
              </div>
              <p className="text-lg">mailaddress@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FaPhone size={24} />
              </div>
              <p className="text-lg">+971544463803</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 p-8 bg-white">
          <h3 className="text-2xl font-semibold mb-6 text-red-600">Send Us a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={message}
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button
              type="button"
              onClick={handleClick}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

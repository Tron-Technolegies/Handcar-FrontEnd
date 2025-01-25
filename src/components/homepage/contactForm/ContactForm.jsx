import React, { useState } from "react";
import "../contactForm/ContactForm.css";

import contactfrom_bg_car from "../../../assets/contactfrom_bg_car.jpg";

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
    <div id="contact" className="contact_form_container">
      <div className="contact_section">
        <div className="contact_details">
          <h1>Contact us</h1>
        </div>

        <div className="contact_detail_content">
          <div className="contact_details_and_logo">
            <div className="contact_details_logo">
              <CiLocationOn size={20} />
            </div>
            <p>Based in Abu Dhabi, UAE</p>
          </div>

          <div className="contact_details_and_logo">
            <div className="contact_details_logo">
              <MdOutlineForwardToInbox size={20} />
            </div>
            <p>mailaddress@gmail.com</p>
          </div>

          <div className="contact_details_and_logo">
            <div className="contact_details_logo">
              <FaPhone size={20} />
            </div>
            <p>+971544463803</p>
          </div>
        </div>
      </div>

      <div className="contact_form text-black">
        <div className="name_and_ph_no">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="contact_form_email">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact_form_message">
          <textarea
            type="text"
            placeholder="Message"
            value={message}
            rows={7}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="contact_form_button" onClick={handleClick}>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

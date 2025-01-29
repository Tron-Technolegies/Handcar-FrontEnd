import React, { useState } from "react";
import "../chasisnumberFinder/ChasisNumberFinder.css";
import chasisnumber_header_img from "../../../assets/chasisnumber_header_img.png";
import { toast } from "react-toastify";
import { handleEnquiry } from "../../../utils/WhatsApp";
const ChasisNumberFinder = () => {
  const [number, setNumber] = useState("");

  function handleClick() {
    if (number === "") {
      toast.warn("Please fill in chasis number");
    } else {
      handleEnquiry({
        name: `My Chasis number is ${number}. I would like to discover spare parts for my car`,
      });
      setNumber("");
    }
  }
  return (
    <div className="chasis_number_finder_container">
      <div className="chasis_number_finder_container_img">
        <img
          src={chasisnumber_header_img}
          alt=""
          className="chasisnumber_header_img"
        />
      </div>
      <div className="spare_parts_finder">
        <div className="spare_parts_content">
          <h1>Search by chasis number</h1>
          <p>and discover tailor spare parts for your car</p>
        </div>

        <div className="spare_parts_finder_searchs">
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter Chasis number"
          />
          <button onClick={handleClick}>Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default ChasisNumberFinder;

import React, { useState } from "react";
import "../sparepartsFinder/SparePartsFinder.css";
import topbrand_spare_parts from "../../../assets/topbrand_spare_parts.png";
import { toast } from "react-toastify";
import { handleEnquiry } from "../../../utils/WhatsApp";
const SparePartsFinder = () => {
  const [code, setCode] = useState("");

  function handleClick() {
    if (code === "") {
      toast.warn("Please enter code");
    } else {
      handleEnquiry({
        name: `My item code is ${code}. I like to know about my spare parts`,
      });
      setCode("");
    }
  }
  return (
    <div className="spare_parts_finder_container">
      <div className="spare_parts_finder">
        <div className="spare_parts_content">
          <h1>
            Search for something <br /> specific?
          </h1>
          <p>
            Find the best car spare parts <br /> from the top brands by Item
            code
          </p>
        </div>

        <div className="spare_parts_finder_searchs">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            name=""
            id=""
            placeholder="Enter item code"
          />
          <button onClick={handleClick}>Enquire Now</button>
        </div>
      </div>

      <div className="spare_parts_finder_container_img">
        <img src={topbrand_spare_parts} alt="" />
      </div>
    </div>
  );
};

export default SparePartsFinder;

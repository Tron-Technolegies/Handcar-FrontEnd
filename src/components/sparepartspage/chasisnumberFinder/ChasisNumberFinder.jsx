import React from 'react'
import "../chasisnumberFinder/ChasisNumberFinder.css"
import chasisnumber_header_img from "../../../assets/chasisnumber_header_img.png"
const ChasisNumberFinder = () => {
  return (
    <div className="chasis_number_finder_container">
         <div className="chasis_number_finder_container_img">
        <img src={chasisnumber_header_img} alt="" srcset="" className="chasisnumber_header_img"/>
      </div>
      <div className="spare_parts_finder">
        <div className="spare_parts_content">
          <h1>
            Search by chasis number
          </h1>
          <p>
            and discover tailor spare parts for your car
          </p>
        </div>

        <div className="spare_parts_finder_searchs">
          <input type="text" name="" id="" placeholder="Enter item code" />
          <button>Enquire Now</button>
        </div>
      </div>

     
    </div>
  )
}

export default ChasisNumberFinder

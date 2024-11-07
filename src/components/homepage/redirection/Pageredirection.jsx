import React from "react";
import "../redirection/Pageredirection.css";
import { Link } from "react-router-dom";
const Pageredirection = () => {
  return (
    <div className="home_page_redirection">
      {/* <p>Accessories</p> */}
      <Link to="/accessories">
        <p>Accessories</p>
      </Link>
      <Link to="/spareparts">
        <p>Auto Parts</p>
      </Link>
      <Link to="/servicepage">
        <p>Services</p>
      </Link>
    </div>
  );
};

export default Pageredirection;

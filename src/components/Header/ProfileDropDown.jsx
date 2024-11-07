import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Header/ProfileDropDown.css";
import logout_img from "../../assets/logout_img.png";

const ProfileDropdown = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="profile-dropdown">
      <div className="profile-toggle" onClick={toggleDropdown}>
        <img 
          src={user.profilePicture} 
          alt="Profile" 
          className="profile-picture" 
        />
        <span>Profile</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/profile" className="dropdown-item">My Profile</Link>
          <div className="logout-container">
            <img src={logout_img} alt="Logout" className="logout-img" />
            <button onClick={onLogout} className="dropdown-item logout-button">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

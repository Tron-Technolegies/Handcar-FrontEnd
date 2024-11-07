import React from 'react'
import "../Header/ProfileDetails.css"
const ProfileDetails = () => {
  return (
    <div className='profile_details_container'>

        <div className="profile_details_heading">
        <h3>Personal Info</h3>
        <p>Update your details here</p>
        </div>

        <div className="profile_details_inputs">
            <input type="text" name="" id="" placeholder='Name' />
        </div>
      
    </div>
  )
}

export default ProfileDetails

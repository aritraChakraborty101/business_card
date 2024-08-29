import React from 'react';
import "./App.css";
import profile_picture from "./profile_picture.jpg";


function PictureSection() {
  return (
    <div className="Picture">
      <img className='Image' src={profile_picture} alt="profile_picture" />
    </div>
    );
}

export default PictureSection;

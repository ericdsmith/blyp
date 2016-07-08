import React from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
button to update profile's password in rendered in profile_test component
*/
const ProfilePassword = ({ changePassword }) => (
  <div className={index.updateButton +" "+material.wavesEffect+" "+material.wavesLight+" "+material.btn} onClick={changePassword}>
    UPDATE
  </div>
);

export default ProfilePassword;

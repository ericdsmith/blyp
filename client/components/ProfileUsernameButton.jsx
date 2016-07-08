import React from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
button to update profile's username in rendered in profile_test component
*/
const ProfileUsername = ({ changeUsername }) => (
  <div className={index.updateButton +" "+material.wavesEffect+" "+material.wavesLight+" "+material.btn} onClick={changeUsername}>
    UPDATE
  </div>
);

export default ProfileUsername;

import React from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
update profile's email in rendered in profile_test component
*/
const ProfileEmail = ({ changeEmail }) => (
  <div className={index.updateButton +" "+material.wavesEffect+" "+material.wavesLight+" "+material.btn} onClick={changeEmail}>
    UPDATE
  </div>
);

export default ProfileEmail;

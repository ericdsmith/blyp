import React from 'react'

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

/**
renders each business contained in the Profile_test component
*/
const SelectBusiness = ({ checkin, business }) => (
  <a
    onClick={checkin}
    className={c(m.collectionItem)}
  >
    <li>{business}</li>
  </a>
);

export default SelectBusiness;

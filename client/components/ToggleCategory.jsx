import React from 'react';
import material from '../assets/materialize/css/materialize.css';


const ToggleCategory = ({ category, toggleCategory }) => (
  <a onClick={toggleCategory} className={material.collectionItem}>
    {category}
  </a>
);

export default ToggleCategory;

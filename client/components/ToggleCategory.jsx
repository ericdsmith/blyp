import React from 'react';

const ToggleCategory = ({ category, toggleCategory }) => (
  <div onClick={toggleCategory}>
    {category}
  </div>
);

export default ToggleCategory;

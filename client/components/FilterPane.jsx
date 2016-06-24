import React from 'react'
import ToggleCategory from '../containers/ToggleCategory.js'

const FilterPane = ({ categories }) => (
  <div>
    {categories.map(category => (
      <ToggleCategory key={category} category={category} />
      ))}
  </div>
);

export default FilterPane

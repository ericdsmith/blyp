import React from 'react';
import FilterPane from '../containers/FilterPane.js';
import ProductsPane from '../containers/ProductsPane5.js'
import BasketPane from './BasketPane.jsx';
import PopulateWithFakeData from '../containers/PopulateWithFakeData.js';

const Sell = () => (
  <div className="container-fluid">
    <div className="col-md-12">
      <PopulateWithFakeData />
    </div>
    <div className="col-md-2">
      <FilterPane />
    </div>
    <div className="col-md-8">
      <ProductsPane />
    </div>
    <div className="col-md-2">
      <BasketPane />
    </div>
  </div>
);

export default Sell;

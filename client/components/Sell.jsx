import React from 'react';
import FilterPane from '../containers/FilterPane.js';
import ProductsPane from '../containers/ProductsPane.js'
import BasketPane from './BasketPane.jsx';
import PopulateWithFakeData from '../containers/PopulateWithFakeData.js';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
contains products, filter for products, and basket (which contains items added to purchase)
*/
const Sell = () => (
  <div className="container-fluid">
    <div className={bootstrap.colmd2}>
      <FilterPane />
    </div>
    <div className={bootstrap.colmd8}>
      <ProductsPane />
    </div>
    <div className={bootstrap.colmd2}>
      <BasketPane />
    </div>
  </div>
);

export default Sell;

import React, {Component} from 'react';
// import BasketItem from '';
import BasketItem from '../containers/BasketItem.js'

const Basket = ({ basketItems }) => (
  <div>
    {basketItems.map(item => (
      <BasketItem key={item.sku} sku={item.sku}/>
    ))}
  </div>
);

export default Basket;

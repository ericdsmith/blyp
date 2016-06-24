import React, { Component } from 'react';
import Basket from '../containers/Basket.js'
import Total from '../containers/Total.js'
import CheckoutButton from '../containers/CheckoutButton2.js';

const BasketPane = () => (
  <div>
    <Basket />
    <Total />
    <CheckoutButton />
  </div>
);

export default BasketPane;

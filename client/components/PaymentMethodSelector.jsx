import React from 'react';
import CashSelector from '../containers/CashSelector.js';
import CreditCardSelector from '../containers/CreditCardSelector.js';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
* renders buttons to select between paying with cash or credit
* renders on payment page
*/
const PaymentMethodSelector = () => (
  <div>
    <div className={index.payWith}>Pay with:</div>
    <CashSelector />
    <CreditCardSelector />
  </div>
);

export default PaymentMethodSelector;

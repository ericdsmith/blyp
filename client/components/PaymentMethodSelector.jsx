import React from 'react';
import CashSelector from '../containers/CashSelector.js';
import CreditCardSelector from '../containers/CreditCardSelector.js';

const PaymentMethodSelector = () => (
  <div>
    <div className="pay-with">Pay with:</div>
    <CashSelector />
    <CreditCardSelector />
  </div>
);

export default PaymentMethodSelector;

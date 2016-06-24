import React from 'react';
import PaymentMethodSelector from './PaymentMethodSelector.jsx';
import PaymentMethodModal from '../containers/PaymentMethodModal.js';

const PaymentPane = () => (
  <div>
    <PaymentMethodSelector />
    <PaymentMethodModal />
  </div>
);

export default PaymentPane;

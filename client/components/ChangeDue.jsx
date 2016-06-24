import React from 'react';

const PaymentMethodModal = ({ due, done }) => (
  <div>
    <h3>Change: ${due}</h3>
    <button onClick={done}>DONE</button>
  </div>
);

export default PaymentMethodModal;

import React from 'react';
import AmountReceived from '../containers/AmountReceived.js';
import ChangeDue from '../containers/ChangeDue.js';
// import ProcessCreditCard from '../containers/ProcessCreditCard.js';

const PaymentMethodModal = ({ method, changeDue }) => (
  <div>
    <div>
      {(method === 'cash') && !changeDue && (
        <AmountReceived />
      )}
    </div>
    <div>
      {(method === 'cash') && changeDue && (
        <ChangeDue />
      )}
    </div>
    {/*
    <div>
      {(method === 'credit card') && (
        <ProcessCreditCard />
      )}
    </div>
    */}
  </div>
);

export default PaymentMethodModal;

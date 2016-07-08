import React from 'react';
import AmountReceived from '../containers/AmountReceived.js';
import ChangeDue from '../containers/ChangeDue.js';
import ProcessCreditCard from '../containers/ProcessCreditCard.js';
import CreditCardModal from '../containers/CreditCardModal.js'

/**
* renders payment page, allows selection by button of how a user wants to pay
* holds AmountReceived, ChangeDue, CreditCardModal components
* contained within PaymentPane component
*/
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
    <div>
      {(method === 'credit card' || method === 'manual' || method === 'swipe') && (
        <CreditCardModal />
      )}
    </div>
  </div>
);

export default PaymentMethodModal;

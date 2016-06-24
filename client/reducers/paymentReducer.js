import * as types from '../constants/actionTypes';

/**
 *  Reducer related to payment
 * NOTE: valid payment method descriptors: 'cash', 'credit card'.
 */



var initialState = {
  method: null,
  cashReceived: null
};

 const paymentReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.PAYMENT_METHOD_SELECTED:
    return {
      ...state,
      method: state.method === action.method ? null : action.method,
      cashReceived: null
    };

    case types.CASH_RECEIVED:
    return {
      ...state,
      cashReceived: action.amount
    };

    case types.CHECKOUT_COMPLETED:
    return {
      ...state,
      method: null,
      cashReceived: null
    }

    case types.RESET_PAYMENT:
    return {
      ...state,
      method: null,
      cashReceived: null
    }

    default:
    return state;
  };
};

export default paymentReducer;

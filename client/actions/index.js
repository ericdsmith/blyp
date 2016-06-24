import * as types from '../constants/actionTypes';
// import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import total from '../helpers/basketTotal.js'

//////////////////////////////////////////////////////////////
// Synchronous Action Creators
//////////////////////////////////////////////////////////////

/**
* Payment methods
*/
export const paymentMethodSelected = (method) => {
  return {
    type: types.PAYMENT_METHOD_SELECTED,
    method
  };
};

export const cashReceived = (amount) => {
  return {
    type: types.CASH_RECEIVED,
    amount
  };
};

export const checkoutCompleted = () => {
  return {
    type: types.CHECKOUT_COMPLETED,
  };
};

export const resetPayment = () => {
  return {
    type: types.RESET_PAYMENT,
  };
};

// example action creator
export const somethingHappened = (data) => {
  return {
    type: types.DUMMY,
    color: data.color
  };
};

// Toolbar Buttons Actions
export const checkoutClick = () => {
  return {
    type: types.CHECKOUT_CLICK
  };
};

export const inventoryClick = () => {
  return {
    type: types.INVENTORY_CLICK
  };
};

// authentication state
export const loginRequestSent = () => {
  return {
    type: types.LOGIN_REQUEST_SENT
  }
}

export const loginRequestSuccess = (admin, jwt, name, username) => {
  return {
    type: types.LOGIN_REQUEST_SUCCESS,
    admin,
    jwt,
    name,
    username
  }
}

export const loginRequestFailure = (message) => {
  return {
    type: types.LOGIN_REQUEST_FAILURE,
    message
  };
};

export const populateWithFakeData = (data) => {
  return {
    type: types.POPULATE_WITH_FAKE_DATA,
    data
  };
};

/**
* Basket interaction
*/
export const basketDecreaseCount = (sku) => {
  return {
    type: types.BASKET_DECREASE_COUNT,
    sku
  };
};

export const basketIncreaseCount = (sku) => {
  return {
    type: types.BASKET_INCREASE_COUNT,
    sku
  };
};

export const basketRemoveItem = (sku) => {
  return {
    type: types.BASKET_REMOVE_ITEM,
    sku
  };
};

export const clearBasket = () => {
  return {
    type: types.CLEAR_BASKET
  };
}

export const transactionRequestSuccess = () => {
  return {
    type: types.TRANSACTION_REQUEST_SUCCESS
  };
}

export const transactionRequestFailure = () => {
  return {
    type: types.TRANSACTION_REQUEST_FAILURE
  };
}

export const transactionRequestSent = () => {
  return {
    type: types.TRANSACTION_REQUEST_SENT
  };
}

/**
* Product save requests
*/
export const saveProductRequestSuccess = (product) => {
  return {
    type: types.SAVE_PRODUCT_REQUEST_SUCCESS,
    product
  }
}

export const saveProductRequestFailure = (err) => {
  return {
    type: types.SAVE_PRODUCT_REQUEST_FAILURE,
    err
  }
}

export const saveProductRequestSent = () => {
  return {
    type: types.SAVE_PRODUCT_REQUEST_SENT,
  }
}

/**
* UI action creators
*/
export const toggleCheckout = () => {
  return {
    type: types.TOGGLE_CHECKOUT
  }
}

/**
* category filter pane
*/
export const toggleCategory = (category) => {
  return {
    type: types.TOGGLE_CATEGORY,
    category
  }
}
//////////////////////////////////////////////////////////////
// Asynchronous Action Creator
//////////////////////////////////////////////////////////////
// export const chatSetup = () => {
//   return (dispatch) => {
//     helper.startSock((message) => {
//       dispatch(messageReceived(message));
//     });
//   }
// }

export const attemptLogin = ({username, password}) => {

  return (dispatch) => {
    const config = {
      url: '/login',
      method: 'post',
      data: {username, password},
    };
    axios(config)
    .then(({data: {jwt, name, username, admin}}) => {
      localStorage.setItem('jwt', jwt);
      dispatch(loginRequestSuccess(admin, jwt, name, username));
      dispatch(reset('loginForm'));
      dispatch(push('/sell'));

    })
    .catch(err => {
      dispatch(loginRequestFailure(err));
    });

    dispatch(loginRequestSent());
  }
}

export const saveProduct = (data) => {
  return (dispatch) => {
    const config = {
      url: '/api/products',
      method: 'post',
      data
    };
    axios(config)
    .then(({ data }) => {
      dispatch(saveProductRequestSuccess(data));
      dispatch(reset('addComponentForm'));
    })
    .catch(err => {
      dispatch(saveProductRequestFailure(err));
    });
    dispatch(saveProductRequestSent());
  }
}

export const transactionCompleted = () => {
  return (dispatch, getState) => {
    var transaction = {
      basket: getState().basket,
      tender: getState().payment.method
    };
    const config = {
      url: '/api/transactions',
      method: 'post',
      data: transaction
    };
    axios(config)
    .then(({ data }) => {
      dispatch(transactionRequestSuccess());
    })
    .catch(err => {
      dispatch(transactionRequestFailure());
    });
    dispatch(transactionRequestSent());
  };
};

export const validateCashReceived = (amount) => {
  return (dispatch, getState) => {
    if (amount - total(getState()) > 0) {
      // send transaction request to server
      dispatch(transactionCompleted());
    } else {
      // display warning not enough
    }
    dispatch(cashReceived(amount));
  };
};

export const paymentMethodChange = (newMethod) => {
  return (dispatch) => {
    dispatch(resetPayment());
    dispatch(paymentMethodSelected(newMethod));
    // clear payment forms?
    dispatch(reset('amountReceived'));
  };
};

export const cashCheckoutCompleted = () => {
  return (dispatch) => {
    dispatch(reset('amountReceived'));
    dispatch(checkoutCompleted());
    dispatch(clearBasket());
    dispatch(push('/sell'));
  };
};

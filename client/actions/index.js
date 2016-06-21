import * as types from '../constants/actionTypes';
// import helper from '../services/helper';
import { push } from 'react-router-redux';
import { reset } from 'redux-form';
import axios from 'axios';

//////////////////////////////////////////////////////////////
// Synchronous Action Creators
//////////////////////////////////////////////////////////////

// example action creator
export const somethingHappened = (data) => {
  return {
    type: types.DUMMY,
    color: data.color
  }
}

// Toolbar Buttons Actions
export const checkoutClick = () => {
  return {
    type: types.CHECKOUT_CLICK
  }
}

export const inventoryClick = () => {
  return {
    type: types.INVENTORY_CLICK
  }
}

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
export const basketDecreaseCount = (id) => {
  return {
    type: types.BASKET_DECREASE_COUNT,
    id
  };
};

export const basketIncreaseCount = (id) => {
  return {
    type: types.BASKET_INCREASE_COUNT,
    id
  };
};

export const basketRemoveItem = (id) => {
  return {
    type: types.BASKET_REMOVE_ITEM,
    id
  };
};

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
      dispatch(push('/store'));

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

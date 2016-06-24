import * as types from '../constants/actionTypes.js'

/**
* NOTE
* An item added to the basket by inserting an object into the state array that has an `sku` field and a `quantity` field
*/

const basketReducer = (state = [], action) => {
  switch(action.type) {

    case types.BASKET_DECREASE_COUNT:
    var index;
    if ((index = state.findIndex(item => (item.sku === action.sku))) !== -1) {
      if (state[index].quantity > 1) {
        var newState = [...state];
        newState[index] = {...(state[index]), quantity: state[index].quantity - 1}
        return newState;
      } else {
        return state;
      }
    } else {
      return state;
    }

    case types.BASKET_INCREASE_COUNT:
    var index;
    if ((index = state.findIndex(item => (item.sku === action.sku))) !== -1) {
      var newState = [...state];
      newState[index] = {...(state[index]), quantity: state[index].quantity + 1};
      return newState
    } else {
      return [...state, {sku: action.sku, quantity: 1}];
    }

    case types.BASKET_REMOVE_ITEM:
    var index;
    if ((index = state.findIndex(item => (item.sku === action.sku))) !== -1) {
      return state.filter(item => (item.sku !== action.sku));
    } else {
      return state;
    }


    case types.CLEAR_BASKET:
    return [];

    default:
    return state;
  }
}

export default basketReducer;

import * as types from '../constants/actionTypes';
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import toolbar from './toolbarReducer.js';
import auth from './authReducer.js';
import basket from './basketReducer.js';
import products from './productsReducer.js';
import payment from './paymentReducer'
// import reducer from './myReducerFile.js';

/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const rootReducer = combineReducers({
  form: formReducer, // Reducer provided by 'redux-form' module
  toolbar,
  routing,
  auth,
  basket,
  products,
  payment
});

export default rootReducer;

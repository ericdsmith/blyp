/**
 *  Dummy action for compilation
 */
export const DUMMY = 'DUMMY';

/**
* Actions related to Toolbar
*/
export const INVENTORY_CLICK = 'INVENTORY_CLICK';
export const CHECKOUT_CLICK = 'CHECKOUT_CLICK';

/**
* Actions related to Log In and Authentication
*/
export const LOGIN_REQUEST_SENT = 'LOGIN_REQUEST_SENT';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

/**
* Actions related to basket
*/
// export const BASKET_ADD_ITEM = 'BASKET_ADD_ITEM';
export const BASKET_DECREASE_COUNT = 'BASKET_DECREASE_COUNT';
export const BASKET_INCREASE_COUNT = 'BASKET_INCREASE_COUNT';
export const BASKET_REMOVE_ITEM = 'BASKET_REMOVE_ITEM';
export const PAYMENT_COMPLETED = 'PAYMENT_COMPLETED';

/**
* Actions related to UI
*/
export const CHECKOUT = 'CHECKOUT';
export const CHECKIN = 'CHECKIN';

/**
* Product insertion
*/
export const SAVE_PRODUCT_REQUEST_SUCCESS = 'SAVE_PRODUCT_REQUEST_SUCCESS';
export const SAVE_PRODUCT_REQUEST_FAILURE = 'SAVE_PRODUCT_REQUEST_FAILURE';
export const SAVE_PRODUCT_REQUEST_SENT = 'SAVE_PRODUCT_REQUEST_SENT';

/**
* Actions for testing
*/
export const POPULATE_WITH_FAKE_DATA = 'POPULATE_WITH_FAKE_DATA';

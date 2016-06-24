import React from 'react';
import PopulateWithFakeData from '../containers/PopulateWithFakeData.js';
// import TestItem1 from '../containers/TestItem1.js'
// import TestItem2 from '../containers/TestItem2.js'
// import TestItem3 from '../containers/TestItem3.js'
import ProductsPane2 from '../containers/ProductsPane2Container.js';
import Basket from '../containers/BasketContainer.js';
import Total from '../containers/Total.js'
import Paid from '../containers/Paid.js'

const TestBasket = ({children}) => (
  <div>
    <PopulateWithFakeData />
    <ProductsPane2 />
    <h2>The basket:</h2>
    <Basket />
    <Total />
    <Paid />
  </div>
);

export default TestBasket;

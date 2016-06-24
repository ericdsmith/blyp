import React from 'react';
import Basket from '../containers/Basket.js';
import BackButton from '../containers/BackButton.js';
import Total from '../containers/Total.js'


const OverviewPane = () => (
  <div>
    <Basket />
    <Total />
    <BackButton />
  </div>
);

export default OverviewPane;

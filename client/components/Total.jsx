import React, { Component } from 'react';
import centsNumberToString from '../helpers/centsNumberToString';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
* Total amount to be paid during a transaction
* dispalyed in multiple places, in basket, in checkout
*/
export default ({ total }) => (
  <div className={index.total}>
    Total: $ {centsNumberToString(total)}
  </div>
)

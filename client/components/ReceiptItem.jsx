import React, { Component } from 'react';
import centsNumberToString from '../helpers/centsNumberToString.js';

import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
contained within ReceiptBasket component
*/
class ReceiptItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, quantity, price, sku} = this.props;
    return (
      <div className={index.receiptitem}>
        Product: <strong>{name}</strong> Sku: <strong>{sku}</strong> QTY: <strong>{quantity}</strong> Price: <strong>${centsNumberToString(price)}</strong>
        {<br></br>}
      </div>
    )
  }
}

export default ReceiptItem;

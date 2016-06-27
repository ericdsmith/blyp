import React, { Component } from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

export default class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { incrementItem, product: { name, sku } } = this.props;
    return (
      <div className={index.colMd3 +" "+index.indexCard}>
        <div className={index.myCard} onClick={incrementItem} col-md-3>
          <div className={index.myCardBlock}>
            <h3 className={index.myCardTitle}>{name}</h3>
          </div>
          <div className={index.myCardImage}>
          <img src={`/images/${sku}`} alt={name} />
          </div>
        </div>
      </div>
    );
  }
}

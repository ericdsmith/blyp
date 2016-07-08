import React, { Component } from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
* represents a product contained within the inventory page
*/
export default class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { incrementItem, product: { name, sku, imgSrc }, jwt } = this.props;
    return (
      <div className={bootstrap.colmd3 +" "+index.indexCard}>
        <div className={index.myCard} onClick={incrementItem} col-md-3>
          <div className={index.myCardBlock}>
            <h3 className={index.myCardTitle}>{name}</h3>
          </div>
          <div className={index.myCardImage}>
          <img className={material.circle+" "+index.pic} src={imgSrc} alt={name} />
          </div>
        </div>
      </div>
    );
  }
}

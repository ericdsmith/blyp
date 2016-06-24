import React, { Component } from 'react'
import Product from '../containers/Product2.js';

export default class ProductsPane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products } = this.props;
    return (
        <div className="card-deck-wrapper">
          <div className="card-deck">
            {(() => {
              var list = [];
              if (Object.keys(products).length) {
                for (var sku in products) {
                  list.push(<Product key={sku} sku={sku} />)
                }
              }
              return list;
            })()}
          </div>
        </div>
    );
  }
}

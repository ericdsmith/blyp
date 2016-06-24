import React from 'react'
import {Component} from 'react'
import Product from '../containers/ProductContainer.js';

export default class ProductsPane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {products} = this.props;
    return (
      <div>
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
    );
  }
}

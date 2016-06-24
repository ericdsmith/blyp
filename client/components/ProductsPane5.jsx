import React, { Component } from 'react'
import Product from '../containers/Product3.js';

export default class ProductsPane extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { products, visibilityFilter } = this.props;
    // the prop `products` is object, and filter transforms to array
    const filter = (products) => {
      var results = [];
      for (var key in products) {
        if (products[key].category === visibilityFilter || visibilityFilter === 'all') {
          results.push(products[key]);
        }
      }
      return results;
    };

    // input of order expected to be array
    const order = (products) => {
      return products;
    };

    var list = order(filter(products));
    return (
        <div className="row">
            {(() => {
              var nodes = [];
                for (var i in list) {
                  nodes.push(<Product key={list[i].sku} sku={list[i].sku} />)
                }
              return nodes;
            })()}
        </div>
    );
  }
}

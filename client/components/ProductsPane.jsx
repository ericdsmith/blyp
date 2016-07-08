import React, { Component } from 'react'
import Product from '../containers/Product.js';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
* contained within StoreMasterComponent
*/

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
        if ((products[key].categories.indexOf(visibilityFilter) !== -1)  || visibilityFilter === 'all') {
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
        <div className={bootstrap.row}>
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

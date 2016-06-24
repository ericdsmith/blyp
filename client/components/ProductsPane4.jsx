import React from 'react';

const ProductPane = ({ products }) => {
  // the prop `products` is object, and filter transforms to array
  const filter = (products) {
    var results = [];
    for (key in products) {
      results.push(products(key));
    }
    return results;
  };

  // input of order expected to be array
  const order = (products) {
    return products;
  };

  var list = order(filter(products));
  var row = [];
  var rows = [];

  for (var i in list) {
    row.push(list[i]);
    if (row.length >= 4) {
      rows.push(
        
      );
    }
  }
}

export default ProductPane;

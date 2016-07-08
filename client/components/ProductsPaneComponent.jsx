import React from 'react'
import {Component} from 'react'
import ProductsPaneRow from './ProductsPaneRow.jsx'
/**
Renders all product pane rows, each representing an inventory item
*/
export default class ProductsPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div>
        <table>
          <caption>Inventory</caption>
          <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>sku</th>
          </tr>
          {this.props.products.map(
            element =>
            <ProductsPaneRow key={element.name} row={element}/>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

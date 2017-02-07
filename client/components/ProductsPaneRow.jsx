import React from 'react'
import {Component} from 'react'
import material from '../assets/materialize/css/materialize.css';
import { Link } from 'react-router';
import index from '../assets/styles/index.css';
import normalizePrice from '../reducers/normalizePrice';
import classNames from 'classnames';

/**
Each row represents a product in the inventory view
*/
export default class ProducttdeRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className={classNames(index.invPane, material.collectionItem)}>

        <td className={material.td}><Link to={`/inventory/${this.props.row.sku}`}>{this.props.row.name}</Link></td>
        <td> {normalizePrice(this.props.row.price.toString())} </td>
        <td>{this.props.row.quantity}</td>
        <td>{this.props.row.categories.sort().join(', ')}</td>
        <td>{this.props.row.sku}</td>

      </tr>
    );
  }
}

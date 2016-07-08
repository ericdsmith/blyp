import React from 'react';
import { Component } from 'react';
import ProductsPane from './ProductsPaneComponent.jsx';
import Toolbar from './ToolbarComponent.jsx';
import Chat from './ChatComponent.jsx';

/**
*containing component for ProductsPane component
*/
export default class StoreMaster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div>
        <ProductsPane products={this.props.products}/>
        <Chat />
      </div>
    );
  }
}
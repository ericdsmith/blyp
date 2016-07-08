import React from 'react'
import {Component} from 'react'
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
*contains all navigation/toolbar buttons
*/
export default class Toolbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const {fields: {username, password}, handleSubmit} = this.props;
    return (
      <div className='toolbar'>
      <img src="./blyp-login/assets/imgs/blyplogo.png"/>
        <div className='toolbar-button'>
          <button id="inventoryButton" onClick={this.props.inventoryClick}>Inventory</button>
        </div>
        <div className='toolbar-button'>
          <button id="checkoutButton" onClick={this.props.checkoutClick}>Checkout</button>
        </div>
        <div className='toolbar-button'>
          <button id="settingsButton">Settings</button>
        </div>
        <div className='toolbar-button'>
          <button id="userButton">User</button>
        </div>
        {this.props.children}
      </div>
    );
  }
}
//{this.props.checkout && <p>Check out</p>}
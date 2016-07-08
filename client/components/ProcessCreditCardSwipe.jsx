import React, { Component } from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
* processes credit card swipe (non manual entry) on payment page
*/
export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: {creditswipe}, handleSubmit, create} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(create)}>
          <div>
            <input className={index.createProductInput}type='text' placeholder="swipe your card" {...creditswipe}/>
          </div>
          <div className=''>
            <input type='submit' value='CHARGE'/>
          </div>
        </form>
      </div>
    );
  }
}

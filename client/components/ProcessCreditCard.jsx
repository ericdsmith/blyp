import React, { Component } from 'react';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

/**
* renders form which allows users to enter credit card information manually
*/
export default class ProcessCreditCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fields: { number, exp_month, exp_year, cvc }, handleSubmit, create } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(create)}>
          <div>
            <input className={index.createProductInput}type='text' maxLength="16" placeholder="credit card number" {...number}/>
          </div>
          <div>
            <input className={index.createProductInput}type='text' maxLength="2" placeholder="expiration month"{...exp_month}/>
          </div>
          <div>
            <input className={index.createProductInput}type='text' maxLength="2" placeholder="expiration year"{...exp_year}/>
          </div>
          <div>
            <input className={index.createProductInput}type='text' maxLength="4" placeholder="cvc"{...cvc}/>
          </div>
          <div className=''>
            <input type='submit' value='CHARGE'/>
          </div>
        </form>
      </div>
    );
  }
}

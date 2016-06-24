import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields: { amount }, handleSubmit, received } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(received)}>
          <label>Amount received:</label>
          <input placeholder='Amount' type='text' {...amount} />
          <input type='submit' value='PAID' />
        </form>
      </div>
    );
  }
}

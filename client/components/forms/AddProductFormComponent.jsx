import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: {sku, price, inventory, name, categories, details}, handleSubmit, save} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(save)}>
          <div>
            <label>sku <input type='text' {...sku}/></label>
          </div>
          <div>
            <label>price <input type='text' {...price}/></label>
          </div>
          <div>
            <label>inventory <input type='text' {...inventory}/></label>
          </div>
          <div>
            <label>name <input type='text' {...name}/></label>
          </div>
          <div>
            <label>categories <input type='text' {...categories}/></label>
          </div>
          <div>
            <label>details <input type='text' {...details}/></label>
          </div>
          <div className=''>
            <input type='submit' value='SAVE' />
          </div>
        </form>
      </div>
    );
  }
}

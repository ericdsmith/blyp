import React, { Component } from 'react';

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

export default class CreateBusiness extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {fields: { business }, handleSubmit, create} = this.props;
    return (
      <div className={m.row}>
        <form onSubmit={handleSubmit(create)}>
          <div className={m.row}>
            <div className={c(m.col, m.s3)}>
              <div className={c(m.valignWrapper)}>
                <h5 className={c(m.valign)}>{'Create new business'}</h5>
              </div>
            </div>
            <div className={c(m.col, m.s9)}>
              <div className={m.inputField}>
                <input className={m.validate} type='text' {...business}/>
              </div>
            </div>
          </div>
          <div className={m.row}>
            <div className={c(m.col, m.s12)}>
              <button className={c(m.btn, m.wavesEffect, m.wavesLight)} type='submit'>Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

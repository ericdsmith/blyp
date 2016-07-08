import React, { Component } from 'react'

import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

/**
* allows update of products
* renders when a product is clicked from the inventory page
*/
const ProductEditor = class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product, fields: {sku, price, quantity, name, categories, details}, handleSubmit, updateProduct, deleteProduct } = this.props;
    return (
      <div>
        <h1>{product.sku}</h1>
        <h1>{product.name}</h1>
        <div className={m.row}>
          <div className={c(m.col, m.s12, m.m8, m.pushM2, m.l6, m.pushL3)}>
            <form
              onSubmit={handleSubmit(updateProduct)}
              className=''
            >
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Price</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...price}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Quantity</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...quantity}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Name</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...name}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Categories</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...categories}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Details</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...details}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <button className={c(m.btn, m.wavesEffect, m.wavesLight)} type='submit'>Update</button>
                <button onClick={deleteProduct} className={c(m.btn, m.wavesEffect, m.wavesLight, m.red, m.right)} type='button'>Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductEditor;

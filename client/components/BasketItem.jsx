import React, {Component} from 'react';
// import BasketItem from '';
// import Checkout from '';

export default class BasketItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    /**
    * TODO:
    * attach function to increment quantity
    * attach function to decrement quantity
    * attach function to delete item
    */
    const {name, quantity, price, incrementItem, decrementItem, deleteItem} = this.props;
    return (
      <div className="basket-item">
      <span className="name">
          {name}
        </span>
      <span className="delete" onClick={deleteItem}>X</span>
        <div>
        {'($' + price*quantity + ')'}
        </div>
        <div className="quantity">
        <span> {'Quantity: '+quantity+' '}</span>
        <span className="increment-up" onClick={incrementItem}>+</span>
        <span className="increment-down" onClick={decrementItem}>-</span>
        </div>
        {<br></br>}
        
      </div>
    )
  }
}

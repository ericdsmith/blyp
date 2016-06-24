import * as actions from '../actions'
import { connect } from 'react-redux';
import Total from '../components/Total.jsx'

const mapStateToProps = (state) => {
  return {
    total: state.basket.reduce((memo, product) => {
      return memo + state.products[product.sku].price * product.quantity;
    }, 0)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Total);

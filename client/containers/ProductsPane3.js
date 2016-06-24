import * as actions from '../actions'
import {connect} from 'react-redux';
import ProductsPane from '../components/ProductsPane3.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPane);

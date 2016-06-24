import * as actions from '../actions'
import { connect } from 'react-redux';
import ProductsPane from '../components/ProductsPane5.jsx'

const mapStateToProps = (state) => {
  return {
    products: state.products,
    visibilityFilter: state.toolbar.visibilityFilter
  };
};

export default connect(mapStateToProps)(ProductsPane);

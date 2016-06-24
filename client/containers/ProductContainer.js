import * as actions from '../actions'
import {connect} from 'react-redux';
import ProductComponent from '../components/ProductComponent.jsx'

const mapStateToProps = (state, ownProps) => {
  const { sku } = ownProps;
  return {
    name: state.products[sku].name
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { sku } = ownProps;
  return {
    incrementItem: () => {
      dispatch(actions.basketIncreaseCount(sku));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);

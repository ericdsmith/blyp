import * as actions from '../actions'
import { connect } from 'react-redux';
import Basket from '../components/Basket.jsx'

const mapStateToProps = (state) => {
  return {
    basketItems: [...state.basket]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

import * as actions from '../actions'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CheckoutButton from '../components/CheckoutButton.jsx'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: () => {
      dispatch(push('/checkout'));;
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutButton);

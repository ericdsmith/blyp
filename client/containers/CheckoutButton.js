import * as actions from '../../actions'
import { connect } from 'react-redux';
import CheckoutButton from '../../components/buttons/CheckoutButtonComponent.jsx'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCheckout: () => {
      dispatch(actions.toggleCheckout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutButton);

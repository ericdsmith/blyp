import * as actions from '../actions/index.js';
import { connect } from 'react-redux'
import CreditCardSelector from '../components/CreditCardSelector.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    selectCreditCard: () => {
      // dispatch(actions.paymentMethodSelected('credit card'));
    }
  };
};

const mapStateToProps = (state) => {
  return {
    isSelected: state.payment.method === 'credit card'
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardSelector);

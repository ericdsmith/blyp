import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import AmountReceived from '../components/AmountReceived.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    received: ({ amount }) => {
      dispatch(actions.validateCashReceived(Number(amount)));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'amountReceived',
  fields: ['amount']
}, mapStateToProps, mapDispatchToProps)(AmountReceived);

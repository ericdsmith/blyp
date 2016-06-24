import { reduxForm } from 'redux-form';
import * as actions from '../../actions/index.js';
import AmountReceived from '../../components/forms/AmountReceived.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    received: ({ amount }) => {
      dispatch(actions.cashReceived(amount));
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

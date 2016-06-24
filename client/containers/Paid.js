import * as actions from '../actions'
import { connect } from 'react-redux';
import Paid from '../components/Paid.jsx'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    paid: () => {
      dispatch(actions.transactionCompleted());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Paid);

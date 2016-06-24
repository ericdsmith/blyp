import * as actions from '../actions'
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import BackButton from '../components/BackButton.jsx'

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    back: () => {
      dispatch(push('/sell'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BackButton);

import { connect } from 'react-redux'
import * as actions from '../actions/index.js';
import InitialPrompt from '../components/InitialPromptComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialPrompt);

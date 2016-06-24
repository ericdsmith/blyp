import * as actions from '../actions'
import { connect } from 'react-redux';
import ToggleCategory from '../components/ToggleCategory.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, { category }) => {
  return {
    category,
    toggleCategory: () => {
      dispatch(actions.toggleCategory(category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleCategory);

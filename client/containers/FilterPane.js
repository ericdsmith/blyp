import { connect } from 'react-redux';
import * as actions from '../actions'
import FilterPane from '../components/FilterPane.jsx'

const mapStateToProps = (state) => {
  return {
    categories: (() => {
      var categories = ['all'];
      for (var product in state.products) {
        if (categories.indexOf(state.products[product].category) === -1) {
          categories.push(state.products[product].category);
        }
      }
      return categories;
    })()
  };
}

export default connect(mapStateToProps)(FilterPane);

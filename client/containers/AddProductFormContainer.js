import { reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';
import AddProduct from '../components/forms/AddProductFormComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    save: (values) => {
      dispatch(actions.saveProduct(values));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default reduxForm({
  form: 'addComponentForm',
  fields: ['sku', 'price', 'inventory', 'name', 'categories', 'details']
}, mapStateToProps, mapDispatchToProps)(AddProduct);

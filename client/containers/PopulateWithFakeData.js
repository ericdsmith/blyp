import {connect} from 'react-redux';
import * as actions from '../actions/index.js';
import PopulateWithFakeData from '../components/PopulateWithFakeData.jsx'

const mapDispatchToProps = (dispatch) => {
  return {
    populateWithFakeData: () => {
      dispatch(actions.populateWithFakeData(
        {
          1: {
            name: "Blue Sneakers",
            price: 60,
            quantity: 3,
            category: 'shoes',
            sku: 1
          },
          2: {
            name: "Red Overalls",
            price: 45,
            quantity: 6,
            category: 'clothes',
            sku: 2
          },
          3: {
            name: "Hawaiin Flyin T-Shirt",
            price: 30,
            quantity: 0,
            category: 'clothes',
            sku: 3
          },
          4: {
            name: "Pearl Studs",
            price: 85,
            quantity: 10,
            category: 'jewelry',
            sku: 4
          },
          5: {
            name: "Diamond Necklace",
            price: 299,
            quantity: 1,
            category: 'jewelry',
            sku: 5
          },
          6: {
            name: "Badger T-Shirt",
            price: 45,
            quantity: 40,
            category: 'clothes',
            sku: 6
          },
          7: {
            name: "Skinny Jeans",
            price: 55,
            quantity: 15,
            category: 'hipster-wear',
            sku: 7
          },
          8: {
            name: "Plain White Tee",
            price: 10,
            quantity: 4,
            category: 'clothes',
            sku: 8
          }
        }
      ));
    }
  };
};

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PopulateWithFakeData);

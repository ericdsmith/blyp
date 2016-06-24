import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import StoreMaster from '../components/StoreMasterComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const mapStateToProps = (state) => {
  return {
    products: [
      {
        name: "Blue Sneakers",
        price: 60,
        quantity: 3,
        category: 'shoes',
        sku: 1
      },
      {
        name: "Red Overalls",
        price: 45,
        quantity: 6,
        category: 'clothes',
        sku: 2
      },
      {
        name: "Hawaiin Flyin T-Shirt",
        price: 30,
        quantity: 0,
        category: 'clothes',
        sku: 3
      },
      {
        name: "Pearl Studs",
        price: 85,
        quantity: 10,
        category: 'jewelry',
        sku: 4
      },
      {
        name: "Diamond Necklace",
        price: 299,
        quantity: 1,
        category: 'jewelry',
        sku: 5
      },
      {
        name: "Badger T-Shirt",
        price: 45,
        quantity: 40,
        category: 'clothes',
        sku: 6
      },
      {
        name: "Skinny Jeans",
        price: 55,
        quantity: 15,
        category: 'hipster-wear',
        sku: 7
      },
      {
        name: "Plain White Tee",
        price: 10,
        quantity: 4,
        category: 'clothes',
        sku: 8
      }
    ]};
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreMaster);

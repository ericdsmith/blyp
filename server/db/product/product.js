var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var productSchema = mongoose.Schema({
  sku: {type: String, unique: true},
  price: {type: Number, required: true},
  quantity: {type: Number, required: true},
  name: String,
  categories: Array,

  //Can contain an arbritray number of details. i.e. Album, Artist etc. 
  details: Array
  },
  {
    timestamps: true
  }
  );

productSchema.plugin(uniqueValidator);
var Product = mongoose.model('Product', productSchema);

module.exports = Product;
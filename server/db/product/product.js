var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  created_at: {type: Date, required: true, default: Date.now}, 
  updated_at: {type: Date, default: Date.now},
  sku: String,
  price: {type: Number, required: true},
  inventory: {type: Number, required: true},
  name: String,
  categories: Array,

  //Can contain an arbritray number of details. i.e. Album, Artist etc. 
  details: Array
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
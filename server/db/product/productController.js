var Product = require('./product.js');

exports.createProduct = function(newProduct, callback){
  new Product(newProduct).save()
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getAllProducts = function(callback){
  Product.find({})
  .then(function(products){
    callback(products);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductById = function(id, callback){
  Product.findOne({_id: id})
  .then(function(product){
    callback(product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductByName = function(productname, callback){
  Product.findOne({name: productname})
  .then(function(product){
    callback(product);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not working
exports.updateProductById = function(id, update, callback){
  Product.findOneAndUpdate({_id: id}, {new: true}, update)
  .then(function(product){
    callback(product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.deleteProductById = function(id, callback){
  Product.findOneAndRemove({_id: id})
  .then(function(product){
    callback(product);
  })
  .catch(function(err){
    callback(err);
  });
};
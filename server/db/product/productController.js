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
    callback(null, products);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductById = function(id, callback){
  Product.findOne({_id: id})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getProductByName = function(productname, callback){
  Product.findOne({name: productname})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.updateProductById = function(id, update, callback){
  Product.findOneAndUpdate({_id: id}, update, {new: true})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.deleteProductById = function(id, callback){
  Product.findOneAndRemove({_id: id})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.updateProductBySku = function(sku, update, callback){
  Product.findOneAndUpdate({sku: sku}, update, {new: true})
  .then(function(product){
    callback(null, product);
  })
  .catch(function(err){
    callback(err);
  });
};
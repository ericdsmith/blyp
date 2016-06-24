var Transaction = require('./transaction.js');
var ProductController = require('../product/productController.js');

//Deducts the quantity purchased from the product quantity in the db
//Adds the item name to the transaction
var processTransaction = function(transaction){
  transaction.basket.forEach(function(item){
    ProductController.updateProductBySku(item.sku, {$inc: {quantity: -item.quantity}}, function(err, product){
      if(err){
        return;
      } else if(product){
        item.name = product.name;
      }
    });
  });
  return transaction;
};

exports.getAllTransactions = function(callback){
  Transaction.find({})
  .then(function(transactions){
    callback(null, transactions);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getTransactionById = function(sku, callback){
  Transaction.findOne({sku: sku})
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.createTransaction = function(transaction, callback){
  processTransaction(transaction);
  Transaction(transaction).save()
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not tested
exports.updateTransactionById = function(sku, update, callback){
  Transaction.findOneAndUpdate({sku: sku}, update, {new: true})
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.TransactionById = function(sku, callback){
  Transaction.findOneAndRemove({sku: sku})
  .then(function(transaction){
    callback(null, transaction);
  })
  .catch(function(err){
    callback(err);
  });
};


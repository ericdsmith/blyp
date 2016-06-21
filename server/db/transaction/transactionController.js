var Transaction = require('./transaction.js');

exports.getAllTransactions = function(callback){
  Transaction.find({})
  .then(function(transactions){
    callback(transactions);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getTransactionById = function(id, callback){
  Transaction.findOne({_id: id})
  .then(function(user){
    callback(user);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.createTransaction = function(transaction, callback){
  Transaction(transaction).save()
  .then(function(transaction){
    callback(transaction);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not tested
exports.updateTransactionById = function(id, update, callback){
  Transaction.findOneAndUpdate({_id: id}, update)
  .then(function(transaction){
    callback(transaction);
  })
  .catch(function(err){
    callback(err);
  });
};
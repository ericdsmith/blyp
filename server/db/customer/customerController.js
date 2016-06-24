var Customer = require('./customer.js');

exports.createCustomer = function(newCustomer, callback){
  new Customer(newCustomer).save()
  .then(function(customer){
    callback(null, customer);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getAllCustomers = function(callback){
  Customer.find({})
  .then(function(customers){
    callback(null, customers);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getCustomerById = function(id, callback){
  Customer.findOne({_id: id})
  .then(function(customer){
    callback(null, customer);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getCustomerByCustomername = function(customername, callback){
  Customer.findOne({name: customername})
  .then(function(customer){
    callback(null, customer);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not tested
exports.updateCustomerById = function(id, update, callback){
  Customer.findOneAndUpdate({_id: id}, update, {new: true})
  .then(function(customer){
    callback(null, customer);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.deleteCustomerById = function(id, callback){
  Customer.findOneAndRemove({_id: id})
  .then(function(customer){
    callback(null, customer);
  })
  .catch(function(err){
    callback(err);
  });
};
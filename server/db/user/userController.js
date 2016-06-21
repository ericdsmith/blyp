var User = require('./user.js');

exports.createUser = function(newUser, callback){
  new User(newUser).save()
  .then(function(newUser){
    callback(newUser);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getAllUsers = function(callback){
  User.find({})
  .then(function(users){
    callback(users);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getUserById = function(id, callback){
  User.findOne({_id: id})
  .then(function(user){
    callback(user);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.getUserByUsername = function(username, callback){
  User.findOne({username: username})
  .then(function(user){
    callback(user);
  })
  .catch(function(err){
    callback(err);
  });
};

//Not tested
exports.updateUserById = function(id, update, callback){
  User.findOneAndUpdate({_id: id}, update)
  .then(function(user){
    callback(user);
  })
  .catch(function(err){
    callback(err);
  });
};

exports.deleteUserById = function(id, callback){
  User.findOneAndRemove({_id: id})
  .then(function(user){
    callback(user);
  })
  .catch(function(err){
    callback(err);
  });
};
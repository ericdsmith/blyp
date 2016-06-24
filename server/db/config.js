var mongoose = require('mongoose');
var User = require('./user/user.js');
var Transaction = require('./transaction/transaction.js')
var Users = require('./user/userController.js');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/blypTest';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('connecting', function(){
  console.log('connecting');
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Mongodb connection open');
}); 

module.exports = db;
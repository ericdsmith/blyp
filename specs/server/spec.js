
var expect = require('chai').expect;
var mongoose = require('mongoose');
var Customer = require('../../server/db/customer/customer.js');
var userController = require('../../server/db/user/userController.js');
var productController = require('../../server/db/product/productController.js');

var dbURI = 'mongodb://localhost/blypTest';

describe('Customer Model', function () {

  before(function(done){

    function clearDB() {
      for (var i in mongoose.connection.collections) {
        mongoose.connection.collections[i].remove(function() {});
      }
      return done();
    }

    if (mongoose.connection.readyState === 0) {
      mongoose.connect(dbURI, function (err) {
        if (err) {
          throw err;
        }
        return clearDB();
      });
    } else {
      return clearDB();
    }
  });

  after(function(done){
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }
    mongoose.connection.close(done);
  });

  it('should save', function(done){
    var testCustomer = {
      name: 'Eric Smith',
      address: '123 Street Jacksonville, FL 32250',
      phone: '404-555-5555'
    };

    new Customer(testCustomer).save(function(err, user){
      expect(user.name).to.equal(testCustomer.name);
      done();
    }); 
  });

  it('should retrieve all customers', function(done){
    var testCustomer2 = {
      name: 'Jenny Thompson',
      address: '555 Some Road Chicago, IL 55555',
      phone: '555-904-404'
    }
    new Customer(testCustomer2).save(function(err, user){
      Customer.find({}, function(err, customers){
        if(err) return err;
        expect(customers.length).to.equal(2);
        done();
      });
    });
  });
});

describe('User Controller', function () {

  before(function(done){
    function clearDB() {
      // for (var i in mongoose.connection.collections) {
      //   mongoose.connection.collections[i].remove(function() {});
      // }
      return done();
    }

    if (mongoose.connection.readyState === 0) {
      mongoose.connect(dbURI, function (err) {
        if (err) {
          throw err;
        }
        return clearDB();
      });
    } else {
      return clearDB();
    }
  });

  after(function(done){
    // for (var i in mongoose.connection.collections) {
    //   mongoose.connection.collections[i].remove(function() {});
    // }
    mongoose.connection.close(done);
  });

  it('Create a new user', function(done){
    var fakeUser = {
      username: 'ericdsmith',
      name: 'Eric Smith',
      role: 'Admin'
    };

    userController.createUser(fakeUser, function(newUser){
      expect(newUser.username).to.equal(fakeUser.username);
      done();
    });
  });

  it('Should not allow duplicate usernames', function(done){
    var fakeUser = {
      username: 'ericdsmith',
      name: 'Eric Smith',
      role: 'Admin'
    };

    userController.createUser(fakeUser, function(newUser){
      expect(newUser.username).to.not.equal(fakeUser.username);
      done();
    });
  });

  it('Should get all users', function(done){
    var fakeUser2 = {
      username: 'fakeuser',
      name: 'Jim Thompson',
      role: 'Cashier'
    };

    userController.createUser(fakeUser2, function(){
      userController.getAllUsers(function(users){
        expect(users.length).to.equal(2);
        done();
      });
    });
  });

  it('Should delete a user by id', function(done){
    var userId = null;
    userController.getUserByUsername('fakeuser', function(user){
      userId = user._id;
      userController.deleteUserById(userId, function(user){
        expect(user.username).to.equal('fakeuser');
        userController.getUserByUsername('fakeuser', function(user){
          expect(user).to.equal(null);
          done();
        });
      });
    });
  });
});

describe('Product controller', function(){
    before(function(done){
    function clearDB() {
      // for (var i in mongoose.connection.collections) {
      //   mongoose.connection.collections[i].remove(function() {});
      // }
      return done();
    }

    if (mongoose.connection.readyState === 0) {
      mongoose.connect(dbURI, function (err) {
        if (err) {
          throw err;
        }
        return clearDB();
      });
    } else {
      return clearDB();
    }
  });

  after(function(done){
    // for (var i in mongoose.connection.collections) {
    //   mongoose.connection.collections[i].remove(function() {});
    // }
    mongoose.connection.close(done);
  });
  it('Should create a new product', function(done){
    var fakeProduct = {
      sku: '456123',
      price: [12.00],
      inventory: 12,
      name: 'iPhone',
      categories: ['Electronics', 'Apple'],
      details: ['64GB', 'Space Grey']
    };
    productController.createProduct(fakeProduct, function(err, product){
      if(err){
        console.log(err);
      }
      expect(product.sku).to.equal(fakeProduct.sku);
      done();
    });
  });
});
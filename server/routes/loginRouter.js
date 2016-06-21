var jwtParser = require('express-jwt');
var jwt = require('jsonwebtoken');
var SECRET = require('../../keys/secret.js');
var router = require('express').Router();

module.exports = router.post('/', (req, res) => {
  var token = jwt.sign({
    admin: true,
    name: 'Eduard',
    username: 'edu',
  }, SECRET);

  res.json({admin: true, jwt: token, name: 'Eduard', username: 'edu'});
});

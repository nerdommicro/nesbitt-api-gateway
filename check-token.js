/*============================================
; Title: check-token.js
; Author: Richard Krasso
; Date: 25 August 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates APIs
==============================================
*/
var jwt = require('jsonwebtoken'); 

var config = require('./config'); 

function checkToken(req, res, next) {

  var token = req.headers['x-access-token']; 

  if (!token)

    return res.status(403).send({ auth: false, message: 'No token was provided' }); 

  jwt.verify(token, config.web.secret, function(err, decoded) {

    if (err)

      return res.status(500).send({ auth: false, message: 'Failed to authenticate the token' });

    req.userId = decoded.id;

    next();

  })
  
}

module.exports = checkToken;
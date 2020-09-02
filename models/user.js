/*============================================
; Title: user.js
; Author: Richard Krasso
; Date: 25 July 2020
; Modified By: Michelle Nesbitt
; Description: Demonstrates APIs
==============================================
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema({
  username: {type: String, required: true },
  password: {type: String, required: true},
  email: {type: String, required: true}
});
const User = module.exports = mongoose.model('User', UserSchema);



module.exports.add = (user, callback) => { 
  user.save(callback);
};

module.exports.getById = (id, callback) => { 
  var query = { _id: id };
  User.findById(query, callback);  
};
/*new code 8/2020*/
module.exports.getOne = (email, callback) => {  
  var query = { email: email };
  User.findOne(query, callback);
}
'use strict';

const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const list = require('../logic/sLinkedList');
const dLinkedList = require('../logic/dLinkedList');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true},
  password: { type: String, requred: true},
  firstName: { type: String },
  lastName: { type: String },
  qList: { type: Object },
  viewList: { type: Object }
});

userSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  }
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
  
userSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};
  
module.exports = mongoose.model('User', userSchema);
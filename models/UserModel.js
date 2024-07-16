const { Schema, model } = require('mongoose');
const userSalt = process.env.USER_SALT;
// const crypto = require('crypto');
// const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Must provide password'],
    minlength: 8,
    select: false,
  },
  password_salt: {
    type: String,
    required: true,
    select: false,
    default: `${userSalt}`,
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'supervisor', 'admin'],
    default: 'user',
  },
});

const User = model('User', userSchema);

module.exports = User;

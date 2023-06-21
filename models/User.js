const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;

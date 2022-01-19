// MODULE
const mongoose = require('mongoose');

// MONGOOSE SCHEMA
const userSchema = new mongoose.Schema({
  tenant: String,
  connection: String,
  email: String,
  password: String,
  email_verified: false,
});

// MONGOOSE MODEL
const User = mongoose.model('User', userSchema);

// Export model
module.exports = User;

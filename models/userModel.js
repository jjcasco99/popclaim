// MODULE
const mongoose = require('mongoose');

// MONGOOSE SCHEMA
const userSchema = new mongoose.Schema({
  tenant: String,
  connection: String,
  email: String,
  password:String,
  debug: Boolean
});

// MONGOOSE MODEL
const User = mongoose.model('User', userSchema);

// Export model
module.exports = User;

// MODULE
const mongoose = require('mongoose');

// MONGOOSE SCHEMA
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true,
  },
});

// MONGOOSE MODEL
const User = mongoose.model('User', userSchema);

// Export model
module.exports = User;

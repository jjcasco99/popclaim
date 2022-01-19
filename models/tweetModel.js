// MODULE
const mongoose = require('mongoose');

// MONGOOSE SCHEMA
const tweetSchema = new mongoose.Schema({
  polarity: Number,
  text: String,
  created_at: String,
  retweet_count: Number,
  username: String,
  followers_count: Number,
  verified: String,
});

// MONGOOSE MODEL
const Tweet = mongoose.model('Tweet', tweetSchema);

// Export model
module.exports = Tweet;

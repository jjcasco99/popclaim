// MODULES
const routes = require('express').Router();
const tweetControllers = require('../controllers/tweetControllers');

// ROUTES
routes
  .route('/')
  .get(tweetControllers.getAllTweets)
  .post(tweetControllers.uploadTweet);

module.exports = routes;

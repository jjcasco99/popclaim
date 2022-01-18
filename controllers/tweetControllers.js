// MODULES
const Tweet = require('../models/tweetModel');

// CONTROLERS
// Get all tweets function
exports.getAllTweets = async (req, res) => {
  try {
    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 10;
    const skip = (page - 1) * limit;

    const query = Tweet.find().skip(skip).limit(limit);

    if (req.query.page) {
      const numTweets = await Tweet.countDocuments();
      if (skip >= numTweets) throw new Error();
    }

    // Execute query
    const tweets = await query;
    res.status(200).json({
      status: 'succes',
      results: tweets.length,
      data: { tweets },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Upload tweets function
exports.uploadTweet = async (req, res) => {
  try {
    const newTweet = await Tweet.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: { tweet: newTweet },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

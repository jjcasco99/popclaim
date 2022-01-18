// MODULES
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');
const path = require('path');
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

// HEROKU STATIC FILES
app.use('/', express.static(path.join(__dirname, '/client/build')));

// Export app
module.exports = app;

// MODULES
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const path = require("path")
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/api/users', userRoutes);

// HEROKU STATIC FILES
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'client/public/index.html'));
  });

// Export app
module.exports = app;

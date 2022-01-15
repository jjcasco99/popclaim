// MODULES
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use('/api/users', userRoutes);

// Export app
module.exports = app;

// MODULES
const routes = require('express').Router();
const userControllers = require('../controllers/userControllers');

// ROUTES
routes
  .route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.createUser);

routes
  .route('/:id')
  .get(userControllers.getUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = routes;

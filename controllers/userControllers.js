// MODULES
const User = require('../models/userModel');

// CONTROLERS
// Get all users function
exports.getAllUsers = async (req, res) => {
  const allUsers = await User.find();
  try {
    res.status(200).json({
      status: 'succes',
      data: { users: allUsers },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get user by id function
exports.getUser = async (req, res) => {
  try {
    res.status(200).json({
      status: 'succes',
      data: { user: '<GET USER BY ID>' },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Create user function
exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: { user: newUser },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Udpate user by id function
exports.updateUser = async (req, res) => {
  try {
    res.status(201).json({
      status: 'succes',
      data: { user: '<UPDATE USER>' },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// Delete user by id function
exports.deleteUser = async (req, res) => {
  try {
    res.status(201).json({
      status: 'succes',
      data: { user: '<DELETE USER>' },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

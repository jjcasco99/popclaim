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
    const getUser = await User.findById(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: { user: getUser },
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
    const updateUser = User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      status: 'succes',
      data: { user: updateUser },
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
    await User.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: 'succes',
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

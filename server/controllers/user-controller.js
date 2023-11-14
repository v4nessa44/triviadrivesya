const asyncHandler = require("express-async-handler");
const User = require("../models/User.js");
const generateToken = require("../utils/generateToken.js");

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;

  // check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }

  // create user if user doesn't exist
  const user = await User.create({
    email,
    password,
    username,
  });

  // return user if user was created
  if (user) {
    res.json({ success: true });
    // res.status(201).json({
    //   _id: user._id,
    //   email: user.email,
    //   username: user.username,
    //   token: generateToken(user._id),
    // });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Authenticate user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // find one user with this email
  const user = await User.findOne({ email });

  // check if user exists and the passwords match
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @desc Update user profile
// @route PUT /api/users
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.email = req.body.email;
    user.avatar = req.body.avatar;

    if (req.body.username) user.username = req.body.username;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      email: updatedUser.email,
      username: updatedUser.username,
      avatar: user.avatar,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Be able to delete a user
// @desc Delete a user
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

//  Be able to get user by id
// @desc Get user by ID
// @route GET /api/users/:id
// @access Private
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  registerUser,
  authUser,
  updateUserProfile,
  deleteUser,
  getUserById,
};

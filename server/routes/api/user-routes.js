const express = require("express");
const {
  authUser,
  deleteUser,
  getUserById,
  registerUser,
  updateUserProfile,
} = require("../../controllers/user-controller.js");
const { protect } = require("../../middleware/authMiddleware.js");

const router = express.Router();

// @desc Register a new user
// @route POST /api/users
// @access Public
router.route("/").post(registerUser);

// @desc Authenticate user & get token
// @route POST /api/users/login
// @access Public
router.route("/login").post(authUser);

// @desc Update user profile
// @route PUT /api/users
// @access Private
router.route("/").put(protect, updateUserProfile);

// TODO:@desc delete user
// @route DELETE /api/users/:id
// @access Private
router.route("/:id").delete(protect, deleteUser);

// TODO: @desc Get user by ID
// @route GET /api/users/:id
// @access Private
router.route("/:id").get(protect, getUserById);

module.exports = router;

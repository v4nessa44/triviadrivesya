const express = require("express");
const {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  updateUser,
  updateUserProfile,
} = require('../../controllers/userController');
const { admin, protect } = require('../../middleware/authMiddleware');

const router = express.Router();

// @desc Register a new user
// @route POST /api/users/register   // Changed from "/" to "/register" for clarity
// @access Public
router.post("/register", registerUser);

// @desc Authenticate user & get token
// @route POST /api/users/login
// @access Public
router.post("/login", authUser);

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
// protect middleware is going to run whenever we hit /api/users/profile
router.get("/profile", protect, getUserProfile);

// @desc Get all users - admins only
// @route GET /api/users
// @access Private/Admin
router.get("/", protect, admin, getUsers);

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
router.put("/profile", protect, updateUserProfile);

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
router.delete("/:id", protect, admin, deleteUser);

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
router.get("/:id", protect, admin, getUserById);

// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin
router.put("/:id", protect, admin, updateUser);

module.exports = router;

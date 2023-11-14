const express = require("express");
const {
  saveGameHistory,
  getGameHistoriesByUser,
  markFavoriteCategory,
} = require("../../controllers/gamehistory-controller");

const router = express.Router();

// Save game history
router.post("/", saveGameHistory);

// Get game histories for a specific user
router.get("/:userId", getGameHistoriesByUser);

// Mark category as favorite
router.post("/mark-favorite-category", markFavoriteCategory);

module.exports = router;
const express = require("express");
const {
  saveGameHistory,
  getGameHistoriesByUser,
} = require("../../controllers/gamehistory-controller");

const router = express.Router();

// Save game history
router.post("/", saveGameHistory);

// Get game histories for a specific user
router.get("/:userId", getGameHistoriesByUser);

module.exports = router;


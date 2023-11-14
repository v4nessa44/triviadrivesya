const express = require("express");
const {
  saveScore,
  getScores,
  getUserTopScores,
} = require("../../controllers/score-controller.js");

const router = express.Router();

// @desc Add a new score
// @route POST /api/scores
// @access Public
router.route("/").post(saveScore);

// @desc Get top scores
// @route GET /api/scores
// @access Public
router.route("/").get(getScores);

// @desc Get user top 5 scores
// @route GET /api/scores/:email
// @access Public
router.route("/:email").get(getUserTopScores);

module.exports = router;

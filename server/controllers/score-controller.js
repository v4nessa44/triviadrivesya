const asyncHandler = require("express-async-handler");
const Score = require("../models/Score.js");

// @desc Add a new score
// @route POST /api/scores
// @access Private
const saveScore = asyncHandler(async (req, res) => {
  try {
    const { email, score } = req.body;

    const newScore = new Score({
      email,
      score,
    });

    const savedScore = await newScore.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Internal Server Error");
  }
});

// @desc Get top scores
// @route GET /api/scores
// @access Public
const getScores = asyncHandler(async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }); // Sorting by score in descending order

    res.json(scores);
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Internal Server Error");
  }
});

// @desc Get user top 5 scores
// @route GET /api/scores/:email
// @access Public
const getUserTopScores = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    // Fetch the top 5 scores for the specified user from the database
    const userTopScores = await Score.find({ email })
      .sort({ score: -1 })
      .limit(5);

    return userTopScores;
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Internal Server Error");
  }
});

module.exports = {
  saveScore,
  getScores,
  getUserTopScores,
};

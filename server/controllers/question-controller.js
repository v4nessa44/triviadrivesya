const asyncHandler = require("express-async-handler");
const Question = require("../models/Question.js");

//  future functionality to be implemented
// @desc Create a new question
// @route POST /api/questions
// @access Private
// const createQuestion = asyncHandler(async (req, res) => {});

// @desc Get a new question
// @route POST /api/questions
// @access Private
const getQuestions = asyncHandler(async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Internal Server Error");
  }
});

module.exports = {
  // createQuestion,
  getQuestions,
};

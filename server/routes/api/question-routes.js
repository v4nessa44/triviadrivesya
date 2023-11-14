const express = require("express");
const {
  // createQuestion,
  getQuestions,
} = require("../../controllers/question-controller.js");

const router = express.Router();

// @desc Create a new question
// @route POST /api/questions
// @access Private
// router.route("/").post(protect, createQuestion);

// @desc Get a new question
// @route POST /api/questions
// @access Private
router.route("/").get(getQuestions);

module.exports = router;

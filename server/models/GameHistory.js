const mongoose = require("mongoose");

const gameHistorySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false, // Default to false, indicating not a favorite
  },
});

const GameHistory = mongoose.model("GameHistory", gameHistorySchema);

module.exports = GameHistory;

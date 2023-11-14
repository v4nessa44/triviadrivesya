const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const gameHistorySchema = new Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
  },
  {
    timestamps: true,
    collection: 'gamehistories', 
  }
);

const GameHistory = model('GameHistory', gameHistorySchema);

module.exports = GameHistory;

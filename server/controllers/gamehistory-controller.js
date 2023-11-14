const GameHistory = require("../models/GameHistory");

// Controller to save game history
exports.saveGameHistory = async (req, res) => {
  const { username, category, score } = req.body;

  try {
    const gameHistory = new GameHistory({
      username,
      category,
      score,
    });

    await gameHistory.save();

    res.json(gameHistory);
  } catch (error) {
    console.error("Error saving game history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get game histories for a specific user
exports.getGameHistoriesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const gameHistories = await GameHistory.find({ username: userId });
    res.json(gameHistories);
  } catch (error) {
    console.error("Error getting game histories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

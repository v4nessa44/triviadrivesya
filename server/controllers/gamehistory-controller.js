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



// Controller to mark a category as favorite
exports.markFavoriteCategory = async (req, res) => {
  const { userId, category } = req.body;

  try {
    // Find the user's game history entry for the specified category
    const gameHistory = await GameHistory.findOne({ username: userId, category });

    if (!gameHistory) {
      return res.status(404).json({ error: "Game history not found for the specified category" });
    }

    // Mark the category as a favorite
    gameHistory.favorite = true;

    // Save the updated game history entry
    await gameHistory.save();

    res.json(gameHistory);
  } catch (error) {
    console.error("Error marking category as favorite:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
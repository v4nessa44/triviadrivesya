import React, { useState, useEffect } from "react";

function Profile() {
  const [gameHistory, setGameHistory] = useState([]);
  const [favoriteCategory, setFavoriteCategory] = useState(null);
  const [userId, setUserId] = useState('yourUserId'); // Replace with actual user ID

  useEffect(() => {
    // Fetch user's game history
    fetch(`http://localhost:3001/game-history/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Include authentication token if required
        // "Authorization": `Bearer ${yourAuthToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGameHistory(data);
      })
      .catch((error) => {
        console.error("Error fetching game history:", error);
      });
  }, [userId]);

  const handleFavoriteCategory = (category) => {
    // Send a request to mark the category as a favorite in the backend
    fetch(`http://localhost:3001/mark-favorite-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include authentication token if required
        // "Authorization": `Bearer ${yourAuthToken}`,
      },
      body: JSON.stringify({
        userId: userId,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Category marked as favorite:", data);
        setFavoriteCategory(category);
      })
      .catch((error) => {
        console.error("Error marking category as favorite:", error);
      });
  };

  return (
    <div>
      <h1>Game History</h1>
      {gameHistory.length === 0 ? (
        <p>No game history available</p>
      ) : (
        <ul>
          {gameHistory.map((game, index) => (
            <li key={index}>
              <p>Category: {game.category}</p>
              <p>Score: {game.score}</p>
              {favoriteCategory !== game.category && (
                <button onClick={() => handleFavoriteCategory(game.category)}>
                  Mark as Favorite
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Profile;


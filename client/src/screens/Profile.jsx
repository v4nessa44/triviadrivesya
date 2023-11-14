import React, { useState, useEffect } from "react";

function Profile() {
  const [gameHistory, setGameHistory] = useState([]);


  const userId = "";

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Profile;

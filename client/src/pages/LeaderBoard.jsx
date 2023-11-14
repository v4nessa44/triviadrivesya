import React, { useContext, useEffect } from "react";
import UserContext from "../contextApi/UserContextProvider";

const LeaderBoard = () => {
  const { getLeaderBoardScores, leaderBoardScores } = useContext(UserContext);

  useEffect(() => {
    getLeaderBoardScores();
  }, []);

  return (
    <div className="main-container">
      <div className="form">
        <h2>Leader Board</h2>
        {leaderBoardScores?.map((ls) => (
          <p key={ls.email} className="oneScore">
            {ls?.email} ------- {ls?.score}
          </p>
        ))}
        {leaderBoardScores.length === 0 && (
          <p style={{ color: "white" }}>No scores yet</p>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;

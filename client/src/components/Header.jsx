import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../contextApi/UserContextProvider";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const goTo = useNavigate();

  return (
    <header>
      <h1 onClick={() => goTo("/")} className="logo">
        TRIVIA-QUIZ
      </h1>
      <div className="con">
        {user ? (
          <>
            <button onClick={logout}>Logout</button>
            <NavLink to="/play">Play Game</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <NavLink to="/profile-info">Profile</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        {/* <button>{user.name}</button> */}
        {user && <p className="logedInUser">{user.email}</p>}
      </div>
    </header>
  );
};

export default Header;

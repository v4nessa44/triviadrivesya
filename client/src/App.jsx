import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home"; // Import your Home component
import Register from "./screens/Register"; // Import your Register component
import Login from "./screens//Login"; // Import your Login component
import PlayGame from "./screens/PlayGame";
// import Profile from "./Profile"; // Import your Profile component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <h1>My trivia app</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play-game" element={<PlayGame />} />
        {/* <Route path="/profile" element={Profile} /> */}
      </Routes>
    </div>
  );
}

export default App;

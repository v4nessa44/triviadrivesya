import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send in the POST request
    const data = {
      email: email,
      password: password,
    };

    try {
      // Send a POST request using the fetch function
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Convert the data object to a JSON string
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Login successful");
        // Store the token in state or cookie for future requests
        const token = responseData.token;
        // ... store the token in state or cookie (use a state management library or cookies)
        navigate("/play-game");
        // Handle successful login here
      } else {
        console.error("Login failed");
        alert("Error logging in");
        // Handle login failure here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any network or other errors here
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

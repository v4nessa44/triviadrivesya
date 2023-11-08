import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const naviagte = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object to send in the POST request
    const data = {
      email: email,
      password: password,
      username: username,
    };

    // Send a POST request using the fetch function
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("Registration successful");
          // Handle successful registration here
          alert("User has been registered, please login");
          naviagte("/login");
        } else {
          console.error("Registration failed");
          alert("Error registering the user!");
          // Handle registration failure here
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any network or other errors here
      });
  };

  return (
    <div>
      <h1>Register</h1>
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
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

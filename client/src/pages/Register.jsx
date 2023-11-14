import { useContext, useState } from "react";
import UserContext from "../contextApi/UserContextProvider";
import { toast } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPass] = useState("");
  const { register } = useContext(UserContext);

  const handleRegister = () => {
    if (!username || !email || !password)
      return toast.error("fields must be filled!");
    if (!isValidEmail(email)) return toast.error("wrong email!");
    if (password !== conPassword) return toast.error("passwords must match!");

    register(username, email, password);
  };

  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  return (
    <div className="main-container">
      <div className="form">
        <h2>Register</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
          type="text"
          placeholder="enter username"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
          type="email"
          placeholder="enter email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
        />
        <input
          value={conPassword}
          onChange={(e) => setConPass(e.target.value)}
          type="password"
          placeholder="enter confirm password"
        />
        <button onClick={handleRegister}>Login</button>
      </div>
    </div>
  );
}

export default Register;

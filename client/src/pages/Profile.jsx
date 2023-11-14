import { useContext, useEffect, useState } from "react";
import UserContext from "../contextApi/UserContextProvider";
import { toast } from "react-toastify";
import { generate } from "random-words";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPass] = useState("");
  const { user, updateProfile } = useContext(UserContext);
  const [avatar, setAvatar] = useState("");

  // if (!user) goTo("/login");

  useEffect(() => {
    setUsername(user?.username);
    setEmail(user?.email);
    setAvatar(user?.avatar);
  }, [user]);

  const updateProfileX = () => {
    if (!email) return toast.error("email cannot be empty!");
    if (!isValidEmail(email)) return toast.error("wrong email!");

    if (password) {
      if (password !== conPassword) return toast.error("passwords must match!");
      else updateProfile(username, email, password, avatar);
    } else {
      updateProfile(username, email, avatar);
    }
  };

  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  const avatarGenerator = () => {
    setAvatar(`https://api.multiavatar.com/${generate()}.png`);
  };

  return (
    <div className="main-container">
      <img
        className="profileImg"
        src={
          avatar ||
          "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170667a&w=0&k=20&c=m-F9Doa2ecNYEEjeplkFCmZBlc5tm1pl1F7cBCh9ZzM="
        }
        alt="profile pic"
      />
      <button style={{ marginBottom: "10px" }} onClick={avatarGenerator}>
        Choose New Avatar
      </button>
      <p style={{ marginBottom: "10px" }}>
        NB: Choose avatar and save profile to update
      </p>
      <div className="form">
        <h2>Profile</h2>
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
        <button onClick={updateProfileX}>Update Profile</button>
      </div>
    </div>
  );
}

export default Profile;

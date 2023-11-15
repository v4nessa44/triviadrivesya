import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserContext = createContext();

const userBaseUrl = "http://localhost:5002/api/users";
const scoresBaseUrl = "http://localhost:5002/api/scores";

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedCat, setSelectedCat] = useState("");
  const [leaderBoardScores, setLeaderBoardScores] = useState([]);
  const [userScores, setUserScores] = useState([]);

  const goTo = useNavigate();

  useEffect(() => {
    const usr = getUser();
    if (usr) {
      getIn(usr, "automatically logged you in 😊!");
    }
  }, []);

  const register = async (username, email, password) => {
    const res = await axios.post(userBaseUrl, { username, email, password });

    if (res.data.message) {
      return toast.error(res.data.message);
    } else if (res.data.success) {
      goTo("/login");
      toast.success("registration successful! Please login");
    } else toast.error("Something went wrong, try again later");
  };

  const login = async (email, password) => {
    const res = await axios.post(userBaseUrl + "/login", { email, password });

    if (res.data.message) {
      return toast.error(res.data.message);
    } else if (res.data._id) {
      getIn(res.data, "successfully loggedIn");
    } else toast.error("Something went wrong, try again later");
  };

  const updateProfile = async (username, email, password, avatar) => {
    const data = {
      username,
      email,
      avatar,
      ...(password && { password }),
    };
    const res = await axios.put(userBaseUrl, data, {
      headers: {
        Authorization: `Bearer ${getUser().token}`, // Include the token in the Authorization header
      },
    });

    if (res.data.message) {
      return toast.error(res.data.message);
    } else if (res.data._id) {
      getIn(res.data, "successfully updated profile!");
    } else toast.error("Something went wrong, try again later");
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    goTo("/login");
    toast.info("logged out!");
  };

  const getCategories = async () => {
    setCategories([
      "music",
      "sport_and_leisure",
      "film_and_tv",
      "arts_and_literature",
      "history",
      "society_and_culture",
      "science",
      "geography",
      "food_and_drink",
      "general_knowledge"
    ].map(category => ({
      id: category,
      name: category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    })));    
  };



  const getQuestions = async () => {
    if (selectedCat) {
      const res = await axios.get(`https://the-trivia-api.com/v2/questions?limit=10&categories=${selectedCat}`, {
        headers: {
          'x-api-key': 'xsCeGQ4rXVXxiB5VpebfN2gSz',
          'Content-Type': 'application/json'
        }
      });

      console.log("questions:", res);
      if (res.data) {
        const structuredQuestions = res.data.map((q) => {
          q.answerArray = addStringAtRandomPosition(
            q.incorrectAnswers,
            q.correctAnswer
          );
          return q;
        });

        setQuestions(structuredQuestions);
        console.log(questions);
      }
    }
  };

  const saveScore = async (score) => {
    const res = await axios.post(scoresBaseUrl, {
      score,
      email: getUser().email,
    });

    if (res.data.message) {
      return toast.error(res.data.message);
    } else if (res.data.success) {
      goTo("/profile-info");
      toast.success("scores successfully saved");
    } else toast.error("Something went wrong, try again later");
  };

  const getLeaderBoardScores = async () => {
    const res = await axios.get(scoresBaseUrl);

    if (res.data.message) {
      return toast.error(res.data.message);
    }

    setLeaderBoardScores(res.data);
  };

  const getUserScores = async () => {
    const res = await axios.get(scoresBaseUrl + "/" + getUser().email);

    if (res.data.message) {
      return toast.error(res.data.message);
    }

    setUserScores(res.data);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length) {
      setCurrentQuestion(questions[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentQuestion("end");
    }
  };

  // set user
  const getIn = (user, msg) => {
    storeUser(user);
    setUser(user);
    toast.success(msg);
    goTo("/profile-info");
  };

  // store user in local storage
  const storeUser = (user) => {
    localStorage.setItem("quizo-user", JSON.stringify(user));
  };

  // get stored user in local storage
  const getUser = () => {
    return JSON.parse(localStorage.getItem("quizo-user")) || null;
  };

  const addStringAtRandomPosition = (array, newString) => {
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * (array.length + 1));

    // Use array.splice() to add the newString at the random position
    array.splice(randomIndex, 0, newString);

    return array;
  };

  return (
    <UserContext.Provider
      value={{
        register,
        login,
        logout,
        user,
        updateProfile,
        getQuestions,
        questions,
        currentQuestion,
        currentIndex,
        setCurrentIndex,
        setCurrentQuestion,
        nextQuestion,
        getCategories,
        categories,
        setSelectedCat,
        selectedCat,
        saveScore,
        getUserScores,
        userScores,
        getLeaderBoardScores,
        leaderBoardScores,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };

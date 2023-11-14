import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { useContext, useEffect } from "react";
import UserContext from "../contextApi/UserContextProvider";

const PlayGame = () => {
  const {
    getCategories,
    selectedCat,
    getQuestions,
    setCurrentIndex,
    setCurrentQuestion,
  } = useContext(UserContext);
  const goTo = useNavigate();

  // if (!user) goTo("/login");
  useEffect(() => {
    getCategories();
    setCurrentIndex(0); // reset
    setCurrentQuestion(null);
  }, []);

  useEffect(() => {
    getQuestions();
  }, [selectedCat]);

  return (
    <div className="main-container">
      <Question />
    </div>
  );
};

export default PlayGame;

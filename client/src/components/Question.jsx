import { useContext, useState } from "react";
import UserContext from "../contextApi/UserContextProvider";
import { toast } from "react-toastify";

const Question = () => {
  const {
    categories,
    currentQuestion,
    currentIndex,
    nextQuestion,
    selectedCat,
    setSelectedCat,
    saveScore,
  } = useContext(UserContext);
  const [selectedValue, setSelectedValue] = useState("");
  const [ans, setAns] = useState("");
  const [score, setScore] = useState(0);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNext = () => {
    if (!selectedValue) {
      return toast.warn("Select an answer!");
    }

    if (currentQuestion.correctAnswer === selectedValue) {
      setScore(score + 1);
      nextQuestion();
      setAns("");
    } else {
      setAns(currentQuestion.correctAnswer);
      setTimeout(() => {
        setAns("");
        nextQuestion();
      }, 2000);
    }
    setSelectedValue("");
  };

  const startGame = () => {
    nextQuestion();
  };

  return (
    <div className="question">
      {currentQuestion && currentQuestion !== "end" ? (
        <>
          <h1>
            {currentIndex}. {JSON.stringify(currentQuestion?.question.text)}
          </h1>
          <div className="answers">
            {currentQuestion?.answerArray.map((a, i) => (
              <div key={i} className="answer">
                <input
                  checked={selectedValue === a}
                  onChange={handleRadioChange}
                  type="radio"
                  id={a}
                  name="fav_language"
                  value={a}
                />
                <label htmlFor={a}>{a}</label>
                <br />
              </div>
            ))}
          </div>
          {ans && <p className="correction">Ans: {ans}</p>}

          <button onClick={handleNext}>Next</button>
        </>
      ) : currentQuestion === "end" ? (
        <>
          <p className="score">SCORE: {score}/ 10</p>
          <button onClick={() => saveScore(score)}>SAVE SCORE AND END</button>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="selectInput">Select a Question Category:</label>
            <br />
            <select
              id="selectInput"
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
            >
              <option value="">Select...</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          {selectedCat && <button onClick={startGame}>START</button>}
        </>
      )}
    </div>
  );
};

export default Question;

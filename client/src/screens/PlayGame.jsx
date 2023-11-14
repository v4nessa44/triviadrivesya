import React, { useState, useEffect } from "react";

// Question component
function Question({ text }) {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

function GameSelector() {
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("9");
  const [response, setResponse] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);


  const userId = "";

  useEffect(() => {
    // Fetch the categories from the API
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.trivia_categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const showCorrect = () => {
    const currentQuestion = response.results[currentQuestionIndex];
    setCorrectAnswers({
      ...correctAnswers,
      [currentQuestionIndex]: currentQuestion.correct_answer,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === response.results.length - 1) {
      finishQuiz(); // Finish the quiz if it's the last question
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    }
  };

  const currentQuestion = response?.results[currentQuestionIndex];

  const handleRequest = () => {
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log({
          data: data,
        });
        setResponse(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const saveGameHistory = () => {
    const gameHistoryData = {
      user: userId,
      category: currentQuestion.category,
      score: score,
    };

    fetch("http://localhost:3001/game-history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameHistoryData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Game history saved successfully:", data);
      })
      .catch((error) => {
        console.error("Error saving game history:", error);
      });
  };

  const calculateScore = () => {
    return Object.keys(correctAnswers).length;
  };

  useEffect(() => {
    const currentQuestion = response?.results[currentQuestionIndex];
    if (currentQuestion) {
      const isAnswerCorrect = selectedAnswer === currentQuestion.correct_answer;
      if (isAnswerCorrect) {
        setScore(score + 1);
      }
    }
  }, [selectedAnswer, currentQuestionIndex]);

  useEffect(() => {
    if (quizFinished) {
      saveGameHistory();
    }
  }, [quizFinished]);

  const finishQuiz = () => {
    setQuizFinished(true);
  };

  return (
    <div>
      <h1>Game Selector</h1>
      <div>
        <label>Select Game Difficulty:</label>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label>Select Game Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleRequest}>Get Questions</button>
      {response && (
        <div>
          <h1>Game Data</h1>
          {currentQuestion && !quizFinished && (
            <div key={currentQuestionIndex}>
              <h2>Category: {currentQuestion.category}</h2>
              <p>Difficulty: {currentQuestion.difficulty}</p>
              <Question text={currentQuestion.question} />
              <form>
                {currentQuestion.incorrect_answers.map((answer, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name={`answers_${currentQuestionIndex}`}
                      value={answer}
                      checked={selectedAnswer === answer}
                      onChange={handleAnswerChange}
                    />
                    {answer}
                  </label>
                ))}
                <label>
                  <input
                    type="radio"
                    name={`answers_${currentQuestionIndex}`}
                    value={currentQuestion.correct_answer}
                    checked={selectedAnswer === currentQuestion.correct_answer}
                    onChange={handleAnswerChange}
                  />
                  {currentQuestion.correct_answer}
                </label>
              </form>
              <button onClick={showCorrect}>Show Correct Answer</button>
              {correctAnswers[currentQuestionIndex] && (
                <p>Correct Answer: {correctAnswers[currentQuestionIndex]}</p>
              )}
              <button onClick={handleNextQuestion}>
                {currentQuestionIndex === response.results.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          )}
          {quizFinished && (
            <div>
              <h1>Quiz Finished</h1>
              <p>Your Final Score: {score}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GameSelector;

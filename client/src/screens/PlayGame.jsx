import React, { useState, useEffect } from "react";

function GameSelector() {
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("9");
  const [response, setResponse] = useState(null);
  const [categories, setCategories] = useState([]);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [correctAnswers, setCorrectAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
  };

  const currentQuestion = response?.results[currentQuestionIndex];

  const handleRequest = () => {
    // Define the API endpoint (replace with your actual API endpoint)
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
          {currentQuestion && (
            <div key={currentQuestionIndex}>
              <h2>Category: {currentQuestion.category}</h2>
              <p>Difficulty: {currentQuestion.difficulty}</p>
              <p>Question: {currentQuestion.question}</p>
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
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GameSelector;

////

import { useEffect, useState } from "react";
import "../styles/Quiz.css";

export default function Quiz({ setFinished, setShowWelcome }) {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/quiz")
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz:", error);
        setLoading(false);
      });
  }, []);

  const handleAnswerValidation = () => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === userAnswer
    );

    if (selectedOption && selectedOption.is_correct) {
      setScore((prevScore) => prevScore + 1);
    }

    setUserAnswer(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      setShowWelcome(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswer(null);
    setFinished(score);
  };

  if (quizData && currentQuestionIndex >= quizData.questions.length) {
    return (
      <div className="quiz-container">
        <h2>{quizData.title}</h2>
        <button onClick={restartQuiz}>Finish Quiz</button>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!quizData) {
    return <div>No quiz data available.</div>;
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">{quizData.title}</h2>
      <h3 className="question-number">Question {currentQuestionIndex + 1}</h3>
      <p className="question-description large-text">{currentQuestion.description}</p>

      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <div key={index} className="option-item aligned-option">
            <input
              type="radio"
              id={`option${index}`}
              name="answer"
              value={option.id}
              checked={userAnswer === option.id}
              onChange={() => setUserAnswer(option.id)}
            />
            <label htmlFor={`option${index}`}>{option.description}</label>
          </div>
        ))}
      </div>

      <div className="button-group">
        {currentQuestionIndex > 0 && (
          <button onClick={handlePreviousQuestion}>Back</button>
        )}

        {userAnswer && (
          <button onClick={handleAnswerValidation}>Next Question</button>
        )}
      </div>
    </div>
  );
}

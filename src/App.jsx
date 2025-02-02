import React, { useState } from "react";
import Quiz from "./components/Quiz"; // Ensure this path is correct based on your file structure
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen"; // Import the StartScreen component
import "./styles/App.css";

export default function App() {
  const [finished, setFinished] = useState(false);
  const [start, setStart] = useState(false); // Initially, set to false to show the Start Screen
  const [score, setScore] = useState(0); // Track score

  const handleStartQuiz = () => {
    setStart(true); // Start the quiz by changing the start state to true
    setFinished(false); // Ensure the quiz is not finished when starting
  };

  const handleFinishQuiz = (finalScore) => {
    setScore(finalScore); // Set the score after the quiz finishes
    setFinished(true); // Set quiz to finished
    setStart(false); // Set start to false, so the result screen is shown
  };

  return (
    <div>
      {!start && !finished ? (
        <StartScreen handleStartQuiz={handleStartQuiz} />
      ) : start ? (
        <Quiz setFinished={handleFinishQuiz} />
      ) : (
        <ResultScreen score={score} setStart={handleStartQuiz} setFinished={setFinished} />
      )}
    </div>
  );
}

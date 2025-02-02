import React from "react";
import "../styles/StartScreen.css";

export default function StartScreen({ handleStartQuiz }) {
  return (
    <div className="start-screen">
      <h2>Welcome to the Quiz!</h2>
      <p>Click below to start the quiz.</p>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
}

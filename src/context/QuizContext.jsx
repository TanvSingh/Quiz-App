import { createContext, useContext, useState } from "react";
import "../styles/Quiz.css";

// Create the context
export const QuizContext = createContext();

// The provider component
export function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState([]);  // State for quiz data
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{ quizData, setQuizData, currentQuestionIndex, setCurrentQuestionIndex, score, setScore }}>
      {children}
    </QuizContext.Provider>
  );
}

// Custom hook to use the context easily
export const useQuizContext = () => useContext(QuizContext);

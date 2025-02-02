import "../styles/ResultScreen.css";

export default function ResultScreen({ score, setStart, setFinished }) {
  return (
    <div className="result-screen">
      <h2>Quiz Completed!</h2>
      <p>Your score: {score}</p>
      <button
        onClick={() => {
          setStart(true); // Restart quiz by setting start to true
          setFinished(false); // Reset finished state
        }}
      >
        Play Again
      </button>
    </div>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QuizProvider } from "./context/QuizContext";  

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);

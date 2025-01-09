import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QuizCpntextProvider from "./store/quizContext.tsx";

createRoot(document.getElementById("root")!).render(
  <QuizCpntextProvider>
    <App />
  </QuizCpntextProvider>
);

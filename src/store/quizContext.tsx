import { createContext, useState } from "react";

export const quizContext = createContext({});

const QuizCpntextProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizzes, setQuizzes] = useState([]);
  return (
    <quizContext.Provider value={{ quizzes, setQuizzes }}>
      {children}
    </quizContext.Provider>
  );
};

export default QuizCpntextProvider;

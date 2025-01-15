import { getDataDB } from "@/firebase";
import { createContext, useEffect, useState } from "react";

export const quizContext = createContext({});

const QuizCpntextProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetch_quizzes = async () => {
      const data = await getDataDB();
      //console.log(data.val());

      // convert object  into array
      // console.log(Object.values(data.val()));
      setQuizzes(Object.values(data.val()));
    };
    fetch_quizzes();
  }, []);

  return (
    <quizContext.Provider value={{ quizzes, setQuizzes }}>
      {children}
    </quizContext.Provider>
  );
};

export default QuizCpntextProvider;

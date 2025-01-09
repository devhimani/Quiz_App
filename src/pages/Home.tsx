import Header from "@/components/shared/Header";
import { quizContext } from "@/store/quizContext";
import { useContext } from "react";

const HomePage = () => {
  const { quizzes } = useContext(quizContext);
  console.log(quizzes);
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;

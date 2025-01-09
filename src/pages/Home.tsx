import Header from "@/components/shared/Header";
import { quizContext } from "@/store/quizContext";
import { useContext } from "react";

const HomePage = () => {
  const { quizzes } = useContext(quizContext);
  console.log(quizzes);
  return (
    <div>
      <Header />
      <div className="p-2 flex gap-2">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="border p-2 w-[150px]">
            <h1 className="font-bold text-sm line-clamp-1">{quiz.name} </h1>
            <p className="line-clamp-2">{quiz.desc}</p>
            <p>{quiz.duration}</p>
            <p>{quiz.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

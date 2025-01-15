import Header from "@/components/shared/Header";
import { quizContext } from "@/store/quizContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { quizzes } = useContext(quizContext);
  //console.log(quizzes);
  return (
    <div>
      <Header />
      <div className="p-2 flex gap-2">
        {quizzes.map((quiz) => (
          <Link key={quiz.id} to={`/quiz/${quiz.id}`}>
            <div
              key={quiz.id}
              className="relative border p-2 w-[150px] h-[90px] select-none cursor-pointer"
            >
              <h1 className="font-semibold line-clamp-1">{quiz.name} </h1>
              <p className="line-clamp-2 text-xs">{quiz.desc}</p>
              <div className="absolute bottom-0 w-full left-0">
                <div className="flex justify-between bg-yellow-400">
                  <p className="text-xs">Duration: {quiz.duration}</p>
                  <p className="text-xs">Marks: {quiz.marks}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

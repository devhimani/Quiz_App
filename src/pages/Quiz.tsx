import { AddQuestion } from "@/components/dialogs/AddQuestiom";
import { getQuizDataDB } from "@/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  //   const params = useParams();
  //   console.log(params);

  // destructure
  const { id } = useParams();
  const [quiz, setQuiz] = useState({});
  console.log(id);

  // fetch data from database
  useEffect(() => {
    const getData = async () => {
      const data = await getQuizDataDB(id);
      // console.log(data.val());
      setQuiz(data.val());
    };
    getData();
  }, []);

  return (
    <div>
      <div className="border-b flex items-center justify-between p-2">
        <h1 className="text-3xl font-semibold">Quiz</h1>
        <AddQuestion />
      </div>
      <div className="p-2 space-y-2">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-xl font-bold bg-gray-300 px-2 rounded">
            {quiz.name}
          </h1>
        </div>
        <div className="flex justify-between text-sm border border-r-0 border-l-0 border-t-0">
          <p>Duration: {quiz.duration} mins</p>
          <p>Marks: {quiz.marks}</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

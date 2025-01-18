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
      <AddQuestion />
    </div>
  );
};

export default Quiz;

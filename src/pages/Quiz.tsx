import { useParams } from "react-router-dom";

const Quiz = () => {
  const params = useParams();
  console.log(params);
  return <>Quiz Page</>;
};

export default Quiz;

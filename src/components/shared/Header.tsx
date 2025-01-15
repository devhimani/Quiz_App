import { AddQuiz } from "../dialogs/AddQuiz";

const Header = () => {
  return (
    <div className="border-b flex items-center justify-between p-2">
      <h1 className="text-3xl font-semibold">Quiz</h1>
      <AddQuiz />
    </div>
  );
};

export default Header;

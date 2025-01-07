import { AddQuiz } from "../dialogs/AddQuiz";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="border-b flex item-center justify-between p-2">
      <h1 className="text-3xl font-semibold">Quiz</h1>
      <Button>Add Quiz</Button>
      <AddQuiz />
    </div>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addQuizDB } from "@/firebase";
import { quizContext } from "@/store/quizContext";
import { useContext, useState } from "react";

export function AddQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const { quizzes, setQuizzes } = useContext(quizContext);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState(0);
  const [marks, setMarks] = useState(0);

  const handleSubmit = () => {
    //console.log({ name, desc, duration, marks });
    const newQuiz = { id: Date.now(), name, desc, duration, marks };

    // set data in context
    setQuizzes([...quizzes, newQuiz]);

    // set data in firebase
    addQuizDB(newQuiz);

    // clear form
    // setName("");
    // setDesc("");
    // setDuration(0);
    // setMarks(0);
    handleClearAll();

    //close dialog
    setIsOpen(false);
  };

  const handleClearAll = () => {
    setName("");
    setDesc("");
    setDuration(0);
    setMarks(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        <Button>Add Quiz</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Quiz</DialogTitle>
          <DialogDescription>Add a New Quiz!</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              className="col-span-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              className="col-span-3"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="w-full">
              <Label htmlFor="duration" className="text-right">
                Duration (mins)
              </Label>
              <input
                id="duration"
                type="number"
                className="col-span-3"
                value={duration || ""}
                onChange={(e) => setDuration(parseInt(e.target.value))}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="marks" className="text-right">
                Marks
              </Label>
              <input
                id="marks"
                type="number"
                className="col-span-3"
                value={marks || ""}
                onChange={(e) => setMarks(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-col justify-between">
          <Button variant={"outline"} onClick={handleClearAll}>
            Clear All
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={!name || !desc || !duration || !marks}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

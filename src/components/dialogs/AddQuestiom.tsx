import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";

export function AddQuestion() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestions = () => {
    const newQuestion = {
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      answer,
    };
    console.log(newQuestion);

    // send data to firebase

    //store data to local context

    // clear form

    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add Question</Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle>Add Question</DialogTitle>
        <div>
          <Label htmlFor="question">Question</Label>
          <Textarea
            id="message"
            placeholder="Please enter question"
            className="mt-1"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mt-[-5px]">
          <Label>Options</Label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="flex items-center gap-2">
              <Label htmlFor="a">(a)</Label>
              <Input
                id="a"
                placeholder="option a"
                value={optionA}
                onChange={(e) => setOptionA(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="b">(b)</Label>
              <Input
                id="b"
                placeholder="option b"
                value={optionB}
                onChange={(e) => setOptionB(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="c">(c)</Label>
              <Input
                id="c"
                placeholder="option c"
                value={optionC}
                onChange={(e) => setOptionC(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="d">(d)</Label>
              <Input
                id="d"
                placeholder="option d"
                value={optionD}
                onChange={(e) => setOptionD(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-[-5px]">
          <Label htmlFor="answer">Answer</Label>
          <RadioGroup
            className="flex mt-1"
            value={answer}
            onValueChange={setAnswer}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="a" id="option-a" />
              <Label htmlFor="option-a">(a)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="b" id="option-b" />
              <Label htmlFor="option-b">(b)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="c" id="option-c" />
              <Label htmlFor="option-c">(c)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="d" id="option-d" />
              <Label htmlFor="option-d">(c)</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex gap-2 mt-2">
          <Button variant={"destructive"}>Clear All</Button>
          <Button className="w-full" onClick={handleQuestions}>
            Add Question
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

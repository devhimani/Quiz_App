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

export function AddQuestion() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Question</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Add Question</DialogTitle>
        <div>
          <Label htmlFor="question">Question</Label>
          <Textarea
            id="message"
            placeholder="Please enter question"
            className="mt-1"
          />
        </div>
        <div className="mt-[-5px]">
          <Label>Options</Label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            <div className="flex items-center gap-2">
              <Label htmlFor="a">(a)</Label>
              <Input id="a" placeholder="option a" />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="a">(b)</Label>
              <Input id="b" placeholder="option a" />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="a">(c)</Label>
              <Input id="c" placeholder="option a" />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="a">(d)</Label>
              <Input id="d" placeholder="option a" />
            </div>
          </div>
        </div>
        <div className="mt-[-5px]">
          <Label htmlFor="answer">Answer</Label>
          <RadioGroup className="flex mt-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="a" id="option-a" />
              <Label htmlFor="option-a">(a)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="b" id="option-a" />
              <Label htmlFor="option-b">(b)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="c" id="option-a" />
              <Label htmlFor="option-c">(c)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="d" id="option-d" />
              <Label htmlFor="option-d">(c)</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex gap-2 mt-2">
          <div>
            <Button variant="destructive">Destructive</Button>
            <Button className="w-full">Add Question</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

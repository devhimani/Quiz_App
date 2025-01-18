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
          <Textarea id="message" placeholder="Please enter question" />
        </div>
        <div>
          <Label>Options</Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="a">(a)</Label>
              <Input id="a" placeholder="option a" />
            </div>
            <div>
              <Label htmlFor="a">(b)</Label>
              <Input id="b" placeholder="option a" />
            </div>
            <div>
              <Label htmlFor="a">(c)</Label>
              <Input id="c" placeholder="option a" />
            </div>
            <div>
              <Label htmlFor="a">(d)</Label>
              <Input id="d" placeholder="option a" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

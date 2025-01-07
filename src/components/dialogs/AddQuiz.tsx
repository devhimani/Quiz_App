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

export function AddQuiz() {
  return (
    <Dialog>
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
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" className="col-span-3" />
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="w-full">
              <Label htmlFor="duration" className="text-right">
                Duration (mins)
              </Label>
              <input id="duration" type="number" className="col-span-3" />
            </div>
            <div className="w-full">
              <Label htmlFor="marks" className="text-right">
                Marks
              </Label>
              <input id="marks" type="number" className="col-span-3" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task.trim());
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <Input
        type="text"
        placeholder="What's on your cozy agenda today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground 
                   focus:ring-pancake-golden focus:border-pancake-golden
                   rounded-xl px-4 py-3 text-base font-medium
                   shadow-sm hover:shadow-md transition-all duration-200"
      />
      <Button 
        type="submit" 
        className="bg-pancake-golden hover:bg-pancake-golden/90 text-foreground 
                   rounded-xl px-6 py-3 font-semibold
                   shadow-sm hover:shadow-md transition-all duration-200
                   hover:scale-105 active:scale-95"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add Task
      </Button>
    </form>
  );
}
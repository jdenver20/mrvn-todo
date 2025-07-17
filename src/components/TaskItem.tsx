import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Edit3, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== task.text) {
      onEdit(task.id, editText.trim());
    }
    setIsEditing(false);
    setEditText(task.text);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(task.text);
  };

  return (
    <div className={`
      bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200
      border border-border group hover:border-pancake-golden/30
      ${task.completed ? 'opacity-70' : ''}
    `}>
      <div className="flex items-center gap-4">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task.id)}
          className="data-[state=checked]:bg-pancake-golden data-[state=checked]:border-pancake-golden
                     border-border hover:border-pancake-golden transition-colors"
        />
        
        {isEditing ? (
          <div className="flex-1 flex items-center gap-2">
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 bg-background border-border focus:ring-pancake-golden 
                         focus:border-pancake-golden rounded-lg"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleEdit();
                if (e.key === 'Escape') handleCancel();
              }}
              autoFocus
            />
            <Button
              size="sm"
              onClick={handleEdit}
              className="bg-pancake-golden hover:bg-pancake-golden/90 text-foreground
                         rounded-lg px-3 h-8"
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleCancel}
              className="border-border hover:bg-muted rounded-lg px-3 h-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <>
            <span className={`
              flex-1 text-foreground font-medium text-base
              ${task.completed ? 'line-through text-muted-foreground' : ''}
            `}>
              {task.text}
            </span>
            
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsEditing(true)}
                className="hover:bg-cinema-warm text-muted-foreground hover:text-foreground
                           rounded-lg h-8 w-8 p-0"
              >
                <Edit3 className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onDelete(task.id)}
                className="hover:bg-destructive hover:text-destructive-foreground
                           text-muted-foreground rounded-lg h-8 w-8 p-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
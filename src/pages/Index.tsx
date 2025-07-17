import { useState } from "react";
import { AppHeader } from "@/components/AppHeader";
import { TaskInput } from "@/components/TaskInput";
import { TaskList } from "@/components/TaskList";
import { Task } from "@/components/TaskItem";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { toast } = useToast();

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
    toast({
      title: "Task added! 🥞",
      description: "Your new task is ready to tackle!",
    });
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
    
    const task = tasks.find(t => t.id === id);
    if (task) {
      toast({
        title: task.completed ? "Task reopened 📝" : "Task completed! 🎉",
        description: task.completed 
          ? "Back to the todo list!" 
          : "Great job! Time for a pancake break?",
      });
    }
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    toast({
      title: "Task deleted 🗑️",
      description: "Task removed from your list.",
    });
  };

  const editTask = (id: string, newText: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, text: newText }
        : task
    ));
    toast({
      title: "Task updated ✏️",
      description: "Your task has been updated!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <AppHeader />
        
        <TaskInput onAddTask={addTask} />
        
        <TaskList 
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </div>
    </div>
  );
};

export default Index;

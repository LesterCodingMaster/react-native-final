import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

interface Task {
  _id: string;
  Title: string;
  Completed: boolean;
}

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3001/tasks");
    const data: Task[] = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = async (title: string) => {
    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Title: title, Completed: false }),
    });

    if (response.ok) {
      const newTask: Task = await response.json();
      setTasks([...tasks, newTask]);
    }
  };

  const handleToggleTask = async (id: string, completed: boolean) => {
    const response = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Completed: completed }),
    });

    if (response.ok) {
      const updatedTasks: Task[] = tasks.map((task) =>
        task._id === id ? { ...task, Completed: completed } : task
      );
      setTasks(updatedTasks);
    }
  };

  const handleDeleteTask = async (id: string) => {
    const response = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const updatedTasks: Task[] = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <TaskForm onCreate={handleCreateTask} />
        <TaskList
          tasks={tasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </IonContent>
    </IonPage>
  );
};

export default TaskPage;

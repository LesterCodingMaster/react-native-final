import { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TaskList from "../components/TaskList";

const CompletedTaskPage = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const fetchCompletedTasks = async () => {
    const response = await fetch("http://localhost:3001/tasks?completed=true");
    const data = await response.json();
    setCompletedTasks(data);
  };

  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  const handleToggle = (taskId: string, completed: boolean) => {};

  const handleDelete = (taskId: string) => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Completed Tasks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <TaskList
          tasks={completedTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </IonContent>
    </IonPage>
  );
};

export default CompletedTaskPage;

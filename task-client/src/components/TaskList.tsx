import React from "react";
import {
  IonList,
  IonItem,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { trash } from "ionicons/icons";

import "./TaskList.css";

interface Task {
  _id: string;
  Completed: boolean;
  Title: string;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: string, completed: boolean) => void;
  onDelete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  const todoTasks = tasks.filter((task) => !task.Completed);
  const completedTasks = tasks.filter((task) => task.Completed);

  return (
    <>
      <IonLabel>
        <h1 className="header-label-1"> To-Do-List</h1>
      </IonLabel>
      <IonList className="task-list">
        {todoTasks.map((task) => (
          <IonItemSliding key={task._id}>
            <IonItem className="task-item">
              <IonCheckbox
                checked={task.Completed}
                onIonChange={() => onToggle(task._id, !task.Completed)}
                slot="end"
              />
              {task.Title}
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger" onClick={() => onDelete(task._id)}>
                <IonIcon icon={trash} slot="icon-only" />{" "}
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>

      <IonLabel>
        <h1 className="header-label-2">Completed</h1>
      </IonLabel>
      <IonList>
        {completedTasks.map((task) => (
          <IonItemSliding key={task._id}>
            <IonItem className="task-item">
              <IonCheckbox
                checked={task.Completed}
                onIonChange={() => onToggle(task._id, !task.Completed)}
                slot="end"
              />
              {task.Title}
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger" onClick={() => onDelete(task._id)}>
                <IonIcon icon={trash} slot="icon-only" />{" "}
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        ))}
      </IonList>
    </>
  );
};

export default TaskList;

import React from "react";
import { IonItem, IonCheckbox, IonLabel, IonButton } from "@ionic/react";

interface TaskItemProps {
  task: {
    _id: string;
    Completed: boolean;
    Title: string;
  };
  onToggle: (taskId: string, completed: boolean) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <IonItem>
      <IonCheckbox
        checked={task.Completed}
        onIonChange={() => onToggle(task._id, !task.Completed)}
      />
      <IonLabel>{task.Title}</IonLabel>
      <IonButton slot="end" color="danger" onClick={() => onDelete(task._id)}>
        Delete
      </IonButton>
    </IonItem>
  );
};

export default TaskItem;

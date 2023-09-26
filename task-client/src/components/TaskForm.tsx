import React, { useState } from "react";
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonInput,
  IonModal,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { add } from "ionicons/icons";

interface TaskFormProps {
  onCreate: (newTask: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreate }) => {
  const [newTask, setNewTask] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCreate = () => {
    if (newTask.trim()) {
      onCreate(newTask);
      setNewTask("");
      setShowModal(false);
    }
  };

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => setShowModal(true)}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>

      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Create Task</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput
            placeholder="New Task"
            value={newTask}
            onIonChange={(e) => setNewTask(e.detail.value!)}
          />
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="full"
                  size="small"
                  shape="round"
                  onClick={handleCreate}
                >
                  Create
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  expand="full"
                  shape="round"
                  size="small"
                  color="danger"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
};

export default TaskForm;

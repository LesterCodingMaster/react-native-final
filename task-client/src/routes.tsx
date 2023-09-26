// routes.tsx
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import TaskPage from "./pages/TaskPage";
import CompletedTaskPage from "./pages/CompletedTaskPage";

const Routes: React.FC = () => (
  <IonRouterOutlet>
    {/* Define your routes here */}
    <Route exact path="/tasks" component={TaskPage} />
    <Route exact path="/completed-tasks" component={CompletedTaskPage} />

    <Redirect exact from="/" to="/tasks" />
  </IonRouterOutlet>
);

export default Routes;

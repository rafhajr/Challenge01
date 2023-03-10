import "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { TaskCreator } from "./components/TaskCreator";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 20,
      description: "Obasadasdasd",
      isChecked: true,
    },
  ]);

  const onNewTask = (task: string) => {
    const newTask = {
      id: Math.random(),
      description: task,
      isChecked: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Header />
      <TaskCreator onNewTask={onNewTask} />
      <Tasks tasks={tasks} />
    </>
  );
}

export default App;

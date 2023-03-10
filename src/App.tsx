import "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { TaskCreator } from "./components/TaskCreator";
import { Tasks } from "./components/Tasks";
import { useState } from "react";

interface ITasks {
  id: number;
  description: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const onNewTask = (task: string) => {
    const newTask = {
      id: Math.random(),
      description: task,
      isChecked: false,
    };

    setTasks([...tasks, newTask]);
  };

  const onCheckedTask = (id: number) => {
    const checkTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });

    setTasks(checkTask);
  };

  const onDeleteTask = (id: number) => {
    const deleteTask = tasks.filter((task) => task.id !== id);

    setTasks(deleteTask);
  };

  return (
    <>
      <Header />
      <TaskCreator onNewTask={onNewTask} />
      <Tasks
        tasks={tasks}
        onCheckedTask={onCheckedTask}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}

export default App;

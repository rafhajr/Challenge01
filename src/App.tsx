import "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { TaskCreator } from "./components/TaskCreator";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <>
      <Header />
      <TaskCreator />
      <Tasks />
    </>
  );
}

export default App;

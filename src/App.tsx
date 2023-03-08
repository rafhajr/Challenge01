import "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  return (
    <>
      <Header />
      <TaskCreator />
    </>
  );
}

export default App;

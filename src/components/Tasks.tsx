import { EmptyState } from "./EmptyState";
import { Task } from "./Task";
import styles from "./tasks.module.css";

interface ITasks {
  tasks: {
    id: number;
    description: string;
    isChecked: boolean;
  }[];
}
export function Tasks({ tasks }: ITasks) {
  const hasTasks = tasks.length > 0;

  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p className={styles.tasksCreated}>Tarefas criadas</p>
          <p className={styles.counter}>{tasks.length}</p>
        </div>

        <div className={styles.title}>
          <p className={styles.finishedTasks}>Concluídas</p>
          <p className={styles.counter}>0</p>
        </div>
      </div>
      <div className={styles.body}>{hasTasks ? <Task /> : <EmptyState />}</div>
    </div>
  );
}

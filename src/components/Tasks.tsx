import { EmptyState } from "./EmptyState";
import styles from "./tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p className={styles.tasksCreated}>Tarefas criadas</p>
          <p className={styles.counter}>1</p>
        </div>

        <div className={styles.title}>
          <p className={styles.finishedTasks}>Concluídas</p>
          <p className={styles.counter}>0</p>
        </div>
      </div>
      <div className={styles.body}>
        <EmptyState />
      </div>
    </div>
  );
}

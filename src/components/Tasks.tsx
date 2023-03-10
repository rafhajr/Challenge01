import { EmptyState } from "./EmptyState";
import { Task } from "./Task";
import styles from "./tasks.module.css";

interface ITasks {
  tasks: {
    id: number;
    description: string;
    isChecked: boolean;
  }[];
  onCheckedTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}
export function Tasks({ tasks, onCheckedTask, onDeleteTask }: ITasks) {
  const hasTasks = tasks.length > 0;
  const countCloncluseTasks = tasks.filter(
    (tasks) => tasks.isChecked === true
  ).length;
  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p className={styles.tasksCreated}>Tarefas criadas</p>
          <p className={styles.counter}>{tasks.length}</p>
        </div>

        <div className={styles.title}>
          <p className={styles.finishedTasks}>Concluídas</p>
          <p className={styles.counter}>{countCloncluseTasks}</p>
        </div>
      </div>
      <div className={styles.body}>
        {hasTasks ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCheckedTask={onCheckedTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}

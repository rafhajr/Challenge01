// import s
import styles from "./emptyState.module.css";
import clipboard from "../assets/clipboard.svg";

export function EmptyState() {
  return (
    <div className={styles.emptyContent}>
      <img src={clipboard} />
      <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

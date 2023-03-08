import style from "./taskCreator.module.css";

export function TaskCreator() {
  return (
    <form className={style.taskForm}>
      <textarea placeholder="Adicione uma nova tarefa" />
      <button>Criar</button>
    </form>
  );
}

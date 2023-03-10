import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import plus from "../assets/plus.svg";
import styles from "./taskCreator.module.css";

interface ITaskCreator {
  onNewTask: (task: string) => void;
}

export function TaskCreator({ onNewTask }: ITaskCreator) {
  const [newCommentText, setNewCommentText] = useState("");

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault();

    onNewTask(newCommentText);

    setNewCommentText("");
  };

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio");
  }

  const isNewCommentEmpty = !!!newCommentText;

  return (
    <form onSubmit={handleNewTask} className={styles.taskForm}>
      <textarea
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewCommentChange}
        value={newCommentText}
        required
        onInvalid={handleNewCommentInvalid}
      />
      <button type="submit" disabled={isNewCommentEmpty}>
        Criar
        <img src={plus} />
      </button>
    </form>
  );
}

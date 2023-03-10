import trash from "../assets/trash.svg";
import trashHover from "../assets/trashHover.svg";
import checked from "../assets/checked.svg";
import styles from "./task.module.css";
import { useState } from "react";

interface ITask {
  id: number;
  description: string;
  isChecked: boolean;
}

interface ITaskProps {
  task: ITask;
  onCheckedTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ task, onCheckedTask, onDeleteTask }: ITaskProps) {
  const { id, description, isChecked } = task;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleChecked = () => {
    onCheckedTask(id);
  };

  const handleDelete = () => {
    onDeleteTask(id);
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.buttonContent}>
        <button
          className={isChecked ? styles.checkedButton : styles.uncheckedButton}
          onClick={handleChecked}
        >
          {isChecked && <img src={checked} />}
        </button>
      </div>
      <div className={styles.taskContent}>
        <p className={isChecked ? styles.checkedText : styles.noStyle}>
          {description}
        </p>
      </div>
      <div
        className={styles.trashButtonContent}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleDelete}
      >
        <button className={styles.trashButton} onClick={handleDelete}>
          {isHover ? <img src={trashHover} /> : <img src={trash} />}
        </button>
      </div>
    </div>
  );
}

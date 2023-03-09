import trash from "../assets/trash.svg";
import trashHover from "../assets/trashHover.svg";
import checked from "../assets/checked.svg";
import styles from "./task.module.css";
import { useState } from "react";

export function Task() {
  const [isHover, setIsHover] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
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
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>
      <div
        className={styles.trashButtonContent}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={styles.trashButton}>
          {isHover ? <img src={trashHover} /> : <img src={trash} />}
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./TaskStyle.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function TaskAdd({ text, finish }) {
  return (
    <div className={finish ? "task-container finish" : "task-container "}>
      <div className="task-text">{text}</div>
      <div className="task-container-icons">
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}
export default TaskAdd;

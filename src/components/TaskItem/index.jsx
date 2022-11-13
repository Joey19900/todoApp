import React from "react";
import "./TaskItem.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function TaskItem({ id, text, finish, completeTask, delateTask }) {
  return (
    <div className={finish ? "task-container finish" : "task-container "}>
      <div className="task-text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="task-container-icons" onClick={() => delateTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
}
export default TaskItem;
